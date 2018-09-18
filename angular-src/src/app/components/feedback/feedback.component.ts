import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Feedback } from '../feedback/feedback';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[];
  feedback:  any;
  user:Object;
  msg = false;
  username: String;
  password: String;
  email: String;
  authToken: any; 

 
  gmail: String;
  name: String;
  mobile: Number;
  subject: String;
  message: String;
  date: Date;

  isDev:boolean;
  constructor(
    private authService:AuthService,
    private router: Router,
    private http: Http,
    private feedbackService: FeedbackService
  ) { this.isDev = true; }
   addFeedback() {
    const newFeedback = {
      email: this.email,
      name: this.name,
      mobile: this.mobile,
      subject: this.subject,
      message: this.message,
      date: this.date   
    }
    this.msg = true;

    this.feedbackService.addFeedback(newFeedback).subscribe(feedback => {
          this.feedbacks.push(feedback);
          this.feedbackService.getFeedbacks()
          .subscribe(feedbacks => 
           this.feedbacks = feedbacks);
        }); 
        console.log("send details"); 
    }
  ngOnInit() {
    this.feedbackService.getFeedbacks()
    .subscribe(feedbacks => 
     this.feedbacks = feedbacks);

     this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
