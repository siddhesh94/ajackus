import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { }

  createUser(name){
    return this.http.post("http://localhost:3000/name",name);
  }
  
}