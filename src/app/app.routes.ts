import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Hero,
  },
  {
    path: 'skills',
    component: Skills,
  },
  {
    path: 'experience',
    component: Experience,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

