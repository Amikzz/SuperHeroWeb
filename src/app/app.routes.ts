import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Heroes } from './components/heroes/heroes';
import { Search } from './components/search/search';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'heroes', component: Heroes },
  { path: 'search', component: Search},
  { path: 'about', component: About}
];

