import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Heroes } from './components/heroes/heroes';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'heroes', component: Heroes }
];

