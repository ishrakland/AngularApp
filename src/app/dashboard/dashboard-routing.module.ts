import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ListingComponent } from './pages/listing/listing.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
{path:'', component:DashboardComponent,children: [
{path:'gestion', component:GestionComponent},
{path:'listing', component:ListingComponent},
{path:'container', component:ContainerComponent}

 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
