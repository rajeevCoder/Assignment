import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { SubBasicComponentComponent } from './sub-basic-component/sub-basic-component.component';
import { SummaryData } from './adavance.pipe';
import { GroupData } from './group.pipe';
import { SearchData } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasicComponent,
    AdvanceComponent,
    SubBasicComponentComponent,
    SummaryData,
    GroupData,
    SearchData
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgPipesModule,
    RouterModule.forRoot([
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'advance',
        component: AdvanceComponent
      },
      {
        path: 'subbasiccomponent',
        component: SubBasicComponentComponent
      },
      {
        path: 'subbasiccomponent/id',
        component: SubBasicComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
