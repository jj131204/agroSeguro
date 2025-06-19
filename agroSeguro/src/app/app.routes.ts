import { Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';

export const routes: Routes = [
    {
        path: '', component : HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    { path: '**', redirectTo: '' }
];
