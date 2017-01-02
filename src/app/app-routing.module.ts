import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContatoComponent } from './components/contato/contato.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: JumbotronComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'issue-list',
    component: IssueListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
