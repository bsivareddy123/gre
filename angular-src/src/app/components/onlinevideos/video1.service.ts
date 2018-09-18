import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Video1Service {

  constructor(private http: Http) { }
  getsubVideo() {
    return this.http.get('http://localhost/services/softprep/api/videos/subcatById_total_vedios/900425/417')
      .map(res => res.json());
  }

}
