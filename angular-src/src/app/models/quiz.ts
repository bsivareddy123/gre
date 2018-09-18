import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    trackid: number;
    name: any;
    solution: any;
    paragraph: string;
    title1: string;
    colA: string;
    colB: string;
    text: any;
    is_answer: boolean;
    description: string;
    config: QuizConfig;
    questions: Question[];
   

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.trackid = data.trackid;
            this.name = data.name;
            this.paragraph = data.paragraph;
            this.title1 = data.title1;
            this.colA = data.colA;
            this.colB = data.colB;
            this.text = data.text;
            this.is_answer = data.is_answer;
            this.solution = data.solution;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
