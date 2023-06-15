import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HomepageComponent, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
