import { NMatiereComponent } from './nmatiere/nmatiere.component';
import { NSalleComponent } from './nsalle/nsalle.component';
import { MatiereComponent } from './matiere/matiere.component';
import { SalleComponent } from './salle/salle.component';
import { SeanceComponent } from './seance/seance.component';
import { NewGroupeComponent } from './new-groupe/new-groupe.component';
import { ManageGroupeComponent } from './manage-groupe/manage-groupe.component';
import { BoardTeacherComponent } from './board-teacher/board-teacher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardRootComponent } from './board-root/board-root.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'student', component: BoardStudentComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'root', component: BoardRootComponent },
  { path: 'manageGroupe', component: ManageGroupeComponent},
  { path: 'manageSeance', component: SeanceComponent},
  { path: 'manageSalle', component: SalleComponent},
  { path: 'NSalle', component:NSalleComponent },
  { path: 'NMatier', component:NMatiereComponent },
  { path: 'manageMatier', component: MatiereComponent},
  { path: 'addgroupe', component: NewGroupeComponent},
  { path: 'teacher', component: BoardTeacherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
