import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoMenuComponent } from './video-menu/video-menu.component';

//API
import { ApiModule } from '../service/api.module'
import { HttpClientModule } from '@angular/common/http'
import { BASE_PATH } from '../service';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [ {provide: BASE_PATH, useValue: environment.API_BASE_PATH } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
