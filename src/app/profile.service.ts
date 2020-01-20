import { Injectable } from '@angular/core';
//import { HttpClient, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
 
  constructor(private http:HttpClient) { 
    console.log("Service ready")
    this.username = 'OLAF';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/ " + this.username +"?client_id=" + environment.
    clientid + "&client_secret=" +environment.clientsecret)
  .map(res => res);
  }

  getProfileRepo(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?client_id="+environment.
    clientid+"&client_secret="+environment.clientsecret)
    .map(res => res);
  }

  updateProfile(username:string){
    this.username=username
  }
}
