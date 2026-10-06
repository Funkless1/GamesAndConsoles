import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Game } from './game/game';
import { Consoles } from './consoles/consoles';
import { ConsoleDetails } from './console-details/console-details';
import { GameDetails } from './game-details/game-details';

@NgModule({
  declarations: [App, Game, Consoles, ConsoleDetails, GameDetails],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
