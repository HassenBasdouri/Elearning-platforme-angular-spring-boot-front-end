import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { NewGroupeComponent } from './new-groupe/new-groupe.component';
import { SeanceComponent } from './seance/seance.component';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { NSalleComponent } from './nsalle/nsalle.component';
import { SalleComponent } from './salle/salle.component';
import { NMatiereComponent } from './nmatiere/nmatiere.component';
import { MatiereComponent } from './matiere/matiere.component';


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
    NewGroupeComponent,
    SeanceComponent,
    NewSeanceComponent,
    NSalleComponent,
    SalleComponent,
    NMatiereComponent,
    MatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
