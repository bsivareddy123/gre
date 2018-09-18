import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-full-length',
  templateUrl: './full-length.component.html',
  styleUrls: ['./full-length.component.css']
})
export class FullLengthComponent implements OnInit {
  private apiUrl = "http://localhost/services/softprep/api/Test/test_all_user_by_id";
  fullTest: any = [];
 
 
   public currentUser : any = {};
 
   username: String;
   password: String;
   email: String ;
   authToken: any;
   user: any;
   isDev:boolean;
   constructor(private http:Http,
     private authService:AuthService,
     private router: Router) 
     { 
     this.isDev = true;
     this.getData();
     this.getFullTest();
    
   }
   getData() {
     return this.http.get(this.apiUrl)
      .map(res => res.json());
   }
   getFullTest() {
     this.getData().subscribe(fullTest => {
       console.log(fullTest);
       this.fullTest = fullTest;
     })
   }
 
   ngOnInit() {
    
   }
 
 }
 