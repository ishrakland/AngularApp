
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListingComponent } from './pages/listing/listing.component';
import { GestionComponent } from './pages/gestion/gestion.component'
import {DashboardRoutingModule} from './dashboard-routing.module'
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe'

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, ContainerComponent, FooterComponent, ListingComponent, GestionComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    HttpClientModule,
         TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })

  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
