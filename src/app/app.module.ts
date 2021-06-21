import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OdportalComponent } from './odportal/odportal.component';
import { HomeComponent } from './home/home.component';
import { BiosComponent } from './bios/bios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OdportalComponent,
    HomeComponent,
    BiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
