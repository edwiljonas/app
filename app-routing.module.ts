import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

// IMPORT COMPONENT
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';

// ROUTES
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: DetailComponent },
];

// MODULE ARRAY
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
