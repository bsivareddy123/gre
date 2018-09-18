import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Http, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  private apiUrl = "http://localhost:8084/api/video_list";
  videoData: any = [];

  // videoData: any = {};

  title: string;
  testid: number;
  trackid: number;
  status: number;
  total_vedios: number;
  total_test_que: number;

  authToken: any;
  user: any;
  isDev:boolean;

  constructor(private router: Router,
              private authService:AuthService,
              private http : Http,) {
              this.getVideo();
              this.getVideodata();

   }
   getVideo() {
     return this.http.get(this.apiUrl)
       .map(res => res.json())
   }
   getVideodata() {
     this.getVideo().subscribe(videoData => {
       console.log(videoData);
       this.videoData = videoData;
     })
   }
   ngOnInit() {
  
  }
    
  }

