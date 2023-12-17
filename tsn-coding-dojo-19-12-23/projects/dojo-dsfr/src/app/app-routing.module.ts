import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauDeBordComponent } from './pages/tableau-de-bord/tableau-de-bord.component';
import { DeclarationsComponent } from './pages/declarations/declarations.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tableau-de-bord',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tableau-de-bord',
    component: TableauDeBordComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'declarations',
    component: DeclarationsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
