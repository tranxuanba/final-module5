import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { TourEditComponent } from './tour/tour-edit/tour-edit.component';
import { TourCreateComponent } from './tour/tour-create/tour-create.component';
import { TourDeleteComponent } from './tour/tour-delete/tour-delete.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    TourEditComponent,
    TourCreateComponent,
    TourDeleteComponent,
    TourDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
