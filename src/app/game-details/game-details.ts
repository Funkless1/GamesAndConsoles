import { Component } from '@angular/core';
import { Games } from '../models/games';
import { ActivatedRoute } from '@angular/router';
import { GameConsole } from '../models/game-console';
import { GAMES } from '../mocks/games-mock';
import { CONSOLES } from '../mocks/consoles-mock';

@Component({
  selector: 'app-game-details',
  standalone: false,
  styleUrl: './game-details.css',
  templateUrl: './game-details.html',
})
export class GameDetails {
  game?: Games;
  console?: GameConsole;

  constructor(private route: ActivatedRoute) {}

  //grab the parameter if it exists
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    //if it does, parse to an integer
    //grab the game with the matching id
    if (!!idParam) {
      const id: number = parseInt(idParam);
      this.game = GAMES.find(g => g.id == id);
    }
    //get the console associated with the game
    if (!!this.game?.consoleId) {
      this.console = CONSOLES.find(c => c.id == this.game?.consoleId);
    }
  }


}
