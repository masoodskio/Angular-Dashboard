import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentsComponent } from './attachments/attachments.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'results', component:ResultsComponent},
  {path:'forms', component:FormsComponent},
  //{path:'account', component:AccountComponent},
  {path:'users', component:UsersComponent},
  {path:'attachments', component:AttachmentsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
