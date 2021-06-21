import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OdportalComponent } from './odportal/odportal.component';
import { BiosComponent } from './bios/bios.component';

import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'bios', component: BiosComponent },
	{ path: 'opendataportal', component: OdportalComponent },
	{ path: '', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
