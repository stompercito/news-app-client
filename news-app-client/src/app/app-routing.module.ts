import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { Page404Component } from './pages/page404/page404.component';
import { TitularesComponent } from './pages/titulares/titulares.component';

const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full'},
  { path: 'titulares/noticias', redirectTo: 'noticias', pathMatch: 'full'},
  { path: 'noticias/titulares', redirectTo: 'titulares', pathMatch: 'full'},
  { path: 'titulares/:id/noticias', redirectTo: 'noticias', pathMatch: 'full'},
  { path: 'noticias/:id/titulares', redirectTo: 'titulares', pathMatch: 'full'},
  { path: 'noticias/:id',  component: NewsComponent},
  { path: 'titulares/:id', component: TitularesComponent},
  { path: 'noticias/:id/:id', redirectTo: 'noticias/:id', pathMatch: 'full'},
  { path: 'titulares/:id/:id', redirectTo: 'titulares/:id', pathMatch: 'full'},
  { path: 'noticias', component: NewsComponent},
  { path: 'titulares', component: TitularesComponent},
  { path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
