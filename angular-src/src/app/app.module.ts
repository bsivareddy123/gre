import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { FeedbackService } from './services/feedback.service';
import { NavbarService } from './services/navbar.service';
import { Video1Service } from '../app/components/onlinevideos/video1.service';
import { QuizService } from './services/quiz.service';
import { HelperService } from './services/helper.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { PracticetestComponent } from './components/practicetest/practicetest.component';
import { FullLengthComponent } from './components/full-length/full-length.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { VideosComponent } from './components/videos/videos.component';
import { TipsComponent } from './components/tips/tips.component';
import { Video1Component } from './components/onlinevideos/video1/video1.component';
import { Video2Component } from './components/onlinevideos/video2/video2.component';
import { ExamComponent } from './components/onlinevideos/exam/exam.component';
import { TestComponent } from './components/test/test.component';
import { TimerComponent } from './components/timer/timer.component';
import { ForgotComponent } from './components/forgot/forgot.component';


const appRoutes: Routes =  [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path:'start', component: StartComponent, canActivate: [AuthGuard]},
  { path: 'practicetest', component: PracticetestComponent, canActivate: [AuthGuard]},
  { path: 'full-length', component: FullLengthComponent, canActivate: [AuthGuard]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
  { path: 'tips', component: TipsComponent, canActivate: [AuthGuard]},
  { path: 'videos', component: VideosComponent, canActivate: [AuthGuard]},
  { path: 'test', component: TestComponent, canActivate: [AuthGuard]},
  { path: 'timer', component: TimerComponent, canActivate: [AuthGuard]},
  { path: 'forgot', component: ForgotComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    StartComponent,
    PracticetestComponent,
    FullLengthComponent,
    FeedbackComponent,
    VideosComponent,
    TipsComponent,
    Video1Component,
    Video2Component,
    ExamComponent,
    TestComponent,
    TimerComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, 
              AuthService, 
              AuthGuard,
              FeedbackService,
              NavbarService,
              Video1Service,
              QuizService,
              HelperService
            ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
