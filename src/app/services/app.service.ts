import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

import { list } from '../utils/mock';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private http: HttpClient) { }

  public getJSON() {
    return list;
  }
}
