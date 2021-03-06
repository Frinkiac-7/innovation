import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OdportalComponent } from './odportal/odportal.component';
import { HomeComponent } from './home/home.component';
import { BiosComponent } from './bios/bios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OdportalComponent,
    HomeComponent,
    BiosComponent,
    InitiativesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
