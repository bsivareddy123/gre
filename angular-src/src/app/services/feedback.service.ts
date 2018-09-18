import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Feedback } from '../components/feedback/feedback';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {
  constructor(private http: Http) { }
  getFeedbacks() {
    return this.http.get('http://localhost:8080/api/feedbacks')
      .map(res => res.json());
  }

  // add contents
  addFeedback(newFeedback) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/feedback', newFeedback, {headers: headers})
       .map(res =>  res.json());
     
  }

  //delete method
  deleteFeedback(id) {
    return this.http.delete('http://localhost:8080/api/content/'+id)
  }
}
