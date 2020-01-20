import { BrowserModule } from '@angular/platform-browser';
//import { platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
//import { HttpClient } from 'selenium-webdriver/http';  
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  exports:[
    
  ],

  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
