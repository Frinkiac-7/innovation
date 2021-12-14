import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OdportalComponent } from './odportal/odportal.component';
import { BiosComponent } from './bios/bios.component';
import { InitiativesComponent } from './initiatives/initiatives.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'bios', component: BiosComponent },
	{ path: 'opendataportal', component: OdportalComponent },
	{ path: 'initiatives', component: InitiativesComponent },
	{ path: '', component: HomeComponent },
	{ path: '**', component: OdportalComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
