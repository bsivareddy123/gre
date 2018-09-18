import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { HelperService } from '../../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../../models/index';
import { Subscription } from 'rxjs/Rx';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [QuizService],
})
export class TestComponent implements OnInit {
  result: any;
  value: any;
  decimal: boolean;
  answer: number;
  total: Array<number>;
  clear: boolean;
  previous_operator: any;

  ticks = 0;
    minutesDisplay: number = 0;
    secondsDisplay: number = 0;
    sub: Subscription;
    show = false;
    
    quizes: any;
    quiz: Quiz = new Quiz(null);
    mode: string = 'quiz';
    quizName: string;
    config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': true,
    'shuffleOptions': true,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
    };

    pager = {
      index: 0,
      size: 1,
      count: 1
    };
    blanksAlp = ["A", "B", "C", "D", "E", "F"];
  
  constructor(private quizService: QuizService,private router: Router) {
        this.result = '';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
   }
   addToCalculation(value) {

    if(this.clear == true) {
        this.result = '';
        this.clear = false;
    }

    if(value == '.') {

        if(this.decimal == true) {
            return false;
        }

        this.decimal = true;

    }

    this.result += value;

}

calculate(operator) {

    this.total.push(this.result);
    this.result = '';

    if(this.total.length == 2) {
        var a = Number(this.total[0]);
        var b = Number(this.total[1]);

        if(this.previous_operator == '+') {
            var total = a + b;
        } else if(this.previous_operator == '-') {
            var total = a - b;
        } else if(this.previous_operator == '*') {
            var total = a * b;
        } else {
            var total = a / b;
        }
        var answer = total;

        this.total = [];
        this.total.push(answer);
        this.result = total;
        this.clear = true;
    }
    else {
        this.clear = false;
    }

    this.decimal = false;
    this.previous_operator = operator;

}

getTotal() {
    var a = Number(this.total[0]);
    var b = Number(this.result);

    if(this.previous_operator == '+') {
        var total = a + b;
    } else if(this.previous_operator == '-') {
        var total = a - b;
    } else if(this.previous_operator == '*') {
        var total = a * b;
    } else {
        var total = a / b;
    }

    if(isNaN(total)) {
        return false;
    }

    this.result = total;
    this.total = [];
    this.clear = true;
}

    ngOnInit() {
     
      this.quizes = this.quizService.getAll();
      this.quizName = this.quizes[0].id;
      this.loadQuiz(this.quizName);

      // timer functionality
      this.startTimer();
      setTimeout((router: Router) => {
        this.router.navigate(['timer']);
    }, 2100000);  //35min

       // browser back button disabled
        history.pushState(null, null, location.href);
        window.onpopstate = function(event) {
          alert("Your, browsers back button is disabled!");
         history.go(1);
        } 
         
    }
   
    private startTimer() {
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;
              this.secondsDisplay = this.getSeconds(this.ticks);
              this.minutesDisplay = this.getMinutes(this.ticks);
          }
      );
  }

  private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
       return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private pad(digit: any) { 
      return digit <= 9 ? '0' + digit : digit;
  }

    loadQuiz(quizName: string) {
      this.quizService.get(quizName).subscribe(
        res => {
        this.quiz = new Quiz(res);
        this.pager.count = this.quiz.questions.length;
      });
    }

    get filteredQuestions() {
      return (this.quiz.questions) ?
        this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : []
    }
    onSelect(question: Question, option: Option) {
      if (question.question_type_id == 2) {
        question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
      }
  
      if (this.config.autoMove) {
        this.goTo(this.pager.index + 1);
      }
    }
  
    goTo(index: number) {
      if (index >= 0 && index < this.pager.count) {
        this.pager.index = index;
        this.mode = 'quiz';
      }
    }

    isAnswered(index) {
      return this.quiz.questions[index].options.find(x => x.selected) ? 'Answered' : 'Not Answered';
    };

    isCorrect(question: Question) {
      return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
    };

    onSubmit() {
      let answers = [];
      this.quiz.questions.forEach(x => answers.push({ 'QuizId': this.quiz.id, 'QuestionId': x.id, 'Answered': x.answered }));

      // Post your data to the server here. answers contains the questionId and the users' answer.
      console.log(this.quiz.questions);
      this.mode = 'result';
    }
    Timer() {
      this.router.navigateByUrl('/timer');
      alert("click Finish You are not allowd to back");
  }
    
  }

