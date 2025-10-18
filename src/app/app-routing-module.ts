import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'peca', pathMatch: 'full'},
  {
    path: 'peca',
    loadChildren: () => import('./peca/peca-module').then(m => m.PecaModule)
  },
  { path: '**', redirectTo: 'peca' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
