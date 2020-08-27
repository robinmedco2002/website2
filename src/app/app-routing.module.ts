import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { DataapiComponent } from './shared/dataapi/dataapi.component';
import { SamplefunComponent } from './shared/samplefun/samplefun.component';
import { SimpleformComponent } from './shared/simpleform/simpleform.component';
import { TdfComponent } from './shared/tdf/tdf.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DataTableComponent } from './shared/data-table/data-table.component'


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent },
  { path:'dataapi', component:DataapiComponent},
  { path:'samplefun', component:SamplefunComponent},
  { path:'simpleform', component:SimpleformComponent},
  { path:'tdf', component:TdfComponent},
  { path:'data-table', component:DataTableComponent},
  { path:'**', component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
