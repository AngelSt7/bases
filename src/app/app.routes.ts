import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero';
import { DragonballComponent } from './pages/dragonball/dragonball';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
    {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
