import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Consoles } from './consoles/consoles';
import { Game } from './game/game';
import { ConsoleDetails } from './console-details/console-details';
import { GameDetails } from './game-details/game-details';

const routes: Routes = [
  {path: 'consoles', component: Consoles},
  {path: 'consoles/:id', component: ConsoleDetails},
  {path: 'game', component: Game},
  {path: 'game/:id', component: GameDetails},
  {path: 'game/consoles/:consoleId', component: Game},
  {path: '', redirectTo: '/consoles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
