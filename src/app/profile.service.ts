import { Injectable } from '@angular/core';
//import { HttpClient, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '5457b41a7ca30faecdb3';
  private clientsecret = '6b41f0a0a5f16a9f179869e98d339fa0dbab7e43';

  constructor(private http:HttpClient) { 
    console.log("Service ready")
    this.username = 'OLAF';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/ " + this.username +"?client_id=" + this.
    clientid + "&client_secret=" +this.clientsecret)
  .map(res => res);
  }

  getProfileRepo(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?client_id="+this.
    clientid+"&client_secret="+this.clientsecret)
    .map(res => res);
  }
}
