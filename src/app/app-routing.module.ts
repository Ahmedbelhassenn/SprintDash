import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component'
import {SprintsTableComponent} from './sprints-table/sprints-table.component'
import {KpisEvolutionComponent} from './kpis-evolution/kpis-evolution.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'user-profile',component: UserProfileComponent},
  {path: 'sprints-table',component: SprintsTableComponent },
  {path: 'kpis-evolution',component: KpisEvolutionComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
