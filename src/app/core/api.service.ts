import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import development from './url-handler.service';

const httpOptions = {
  headers: new HttpHeaders()
    .set("Content-Type","application/json")
    .set("APPID","APPQUEOY6M")
    .set("lang","da315627-3ece-2016-c628-b61dc5ee9be0")
    .set("Access-Control-Allow-Headers","*") 
    .set("Access-Control-Allow-Origin","*")
    .set("Access-Control-Allow-Credentials", "true")
    .set("Access-Control-Allow-Methods","POST")
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  login(loginPayload: any): Observable<any> {
    return this.http.post<any>(development.login,loginPayload,httpOptions)
  };

  Doclist(User_id:any):Observable<any>{
    return this.http.post<any>(development.doclist,User_id)
  }


}
