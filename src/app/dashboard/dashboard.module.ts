import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ListingComponent } from './pages/listing/listing.component'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, ContainerComponent, FooterComponent, GestionComponent, ListingComponent],
  imports: [
    CommonModule, FormsModule, DashboardRoutingModule, HttpClientModule
  ],
  providers: [],

  exports: [DashboardComponent]

})
export class DashboardModule { }
