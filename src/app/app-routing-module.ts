import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consoles } from './consoles/consoles';
import { Game } from './game/game';
import { Games } from './models/games';

const routes: Routes = [
  {path: 'consoles', component: Consoles},
  {path: 'game', component: Game},
  {path: 'game/console/:consoleId', component: Game},
  {path: '', redirectTo: '/consoles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
