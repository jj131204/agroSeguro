import { Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';
import { PanelComponent } from './templates/panel/panel.component';
import { ProfileComponent } from './templates/profile/profile.component';

export const routes: Routes = [
    {
        path: '', component : HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'panel', component: PanelComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    { path: '**', redirectTo: '' }
];
