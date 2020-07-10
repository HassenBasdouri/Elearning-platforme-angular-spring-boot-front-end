import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardRootComponent } from './board-root/board-root.component';
import { ManageGroupeComponent } from './manage-groupe/manage-groupe.component';
import { BoardTeacherComponent } from './board-teacher/board-teacher.component';
import { EmploiGroupeComponent } from './emploi-groupe/emploi-groupe.component';
import { DxSchedulerModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardStudentComponent,
    ProfileComponent,
    BoardManagerComponent,
    BoardRootComponent,
    ManageGroupeComponent,
    BoardTeacherComponent,
    EmploiGroupeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DxSchedulerModule
  ],
  providers: [authInterceptorProviders],
  exports: [EmploiGroupeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
