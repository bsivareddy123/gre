import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Pipe, PipeTransform } from '@angular/core'; 

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  today = Date.now();
  public currentUser : any = {};
  // currentUser: User;
  // users: User[] = [];
  
  username: String;
  email: String
  authToken: any;
  user: any;
  isDev:boolean;



  constructor(private http:Http, 
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService) {
    this.isDev = true; 
   }

  ngOnInit() {
  
  }

}
