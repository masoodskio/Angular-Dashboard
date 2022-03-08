import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { ResultsComponent } from './results/results.component';
import { FormsComponent } from './forms/forms.component';
import { UsersComponent } from './users/users.component';
import { AttachmentsComponent } from './attachments/attachments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContentComponent,
    ResultsComponent,
    FormsComponent,
    UsersComponent,
    AttachmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
