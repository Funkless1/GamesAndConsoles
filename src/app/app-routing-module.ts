import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consoles } from './consoles/consoles';
import { Game } from './game/game';

const routes: Routes = [
  {path: 'consoles', component: Consoles},
  {path: 'game', component: Game},
  {path: '', redirectTo: '/consoles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
