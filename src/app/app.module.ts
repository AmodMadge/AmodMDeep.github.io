import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { ComparisonViewComponent } from './comparison-view/comparison-view.component';
import { FavouritesComponent } from './favourites/favourites.component';

import { CryptoService } from './crypto.service';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
//import { ChartModule } from 'angular-highcharts';
import { ChartModule } from 'angular2-chartjs';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StorageServiceModule } from 'angular-webstorage-service';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ChartViewComponent,
    ComparisonViewComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    CommonModule,
    ChartModule,
    AngularFontAwesomeModule,
    StorageServiceModule,
    HttpClientModule,
    NgxPaginationModule,
    IonRangeSliderModule,
    RouterModule.forRoot([
      {path:'listView', component: ListViewComponent},
      {path:'', redirectTo:'listView',pathMatch:'full'},
      {path :'chart/:id', component: ChartViewComponent},
      {path :'comparisonView/:id1/:id2', component: ComparisonViewComponent},
      {path :'favourites', component: FavouritesComponent}
    ])
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
