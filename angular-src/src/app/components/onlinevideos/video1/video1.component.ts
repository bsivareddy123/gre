import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Http, Headers } from '@angular/http';
import { Video1Service } from '../video1.service';
import { Video1 } from '../video1/video1';
import { Subscription } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-video1',
  templateUrl: './video1.component.html',
  styleUrls: ['./video1.component.css']
})
export class Video1Component implements OnInit {
  videos: Video1[];
  video: any;

  titlelink: string;
  youtube_uniqid: any;
  testid: number;
  catid: number;
  testname: string;
  status: any;
  is_open: boolean;

  authToken: any;
  user: any;
  isDev:boolean;

  constructor(private videoService: Video1Service,
    private router: Router,
    private authService:AuthService) {

   }
   ngOnInit() {
    this.videoService.getsubVideo()
    .subscribe(videos => 
     this.videos = videos);
  }

  }

