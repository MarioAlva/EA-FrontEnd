import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventScreenComponent } from './components/event-screen/event-screen.component';
import { UserListComponent } from './components/UserList/userlist.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { CreateSerieComponent } from './create-serie/create-serie.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { SeriesUpdateComponent } from './components/series-update/series-update.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'event-screen', component: EventScreenComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'users-update/:_id', component: UsersUpdateComponent },
  { path: 'create-serie', component: CreateSerieComponent },
  { path: 'series-list', component: SeriesListComponent},
  { path: 'reports-list', component: ReportsListComponent},
  { path: 'series-update/:_id', component: SeriesUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
