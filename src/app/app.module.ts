import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import{MatTooltipModule} from '@angular/material/tooltip'
import { HttpClientModule, provideHttpClient ,withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SprintsTableComponent } from './sprints-table/sprints-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VelocityComponent } from './dashboard/Charts/velocity/velocity.component';
import { SprintRateComponent } from './dashboard/Charts/sprint-rate/sprint-rate.component';
import { StoryPointsRateComponent } from './dashboard/Charts/story-points-rate/story-points-rate.component';
import { KpisEvolutionComponent } from './kpis-evolution/kpis-evolution.component';
import { MatTable } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { VelocityPerSemesterChartComponent }from './kpis-evolution/velocity-per-semester-chart/velocity-per-semester-chart.component'
import { VelocityPerYearChartComponent }from './kpis-evolution/velocity-per-year-chart/velocity-per-year-chart.component'
import { SprintListComponent } from './sprints-table/sprint-list/sprint-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UserProfileComponent,
    SprintsTableComponent,
    VelocityComponent,
    SprintRateComponent,
    StoryPointsRateComponent,
    KpisEvolutionComponent,
    VelocityPerSemesterChartComponent,
    VelocityPerYearChartComponent,
    SprintListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelect,
    MatTooltipModule,
    MatTableModule,
    MatToolbarModule,
    NgxChartsModule,
    MatTable,
    MatTabsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
