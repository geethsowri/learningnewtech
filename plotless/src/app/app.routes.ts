import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Movie } from './movie/movie';

export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'home', component:  Home },
    { path: 'movie', component: Movie },
];
