import { Component } from '@angular/core';
import { Games } from '../models/games';
import { GAMES } from '../mocks/games-mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: false,
  styleUrl: './game.css',
  templateUrl: './game.html',
})
export class Game {
  games?: Games[] | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //grab the console paramater from the url
    const idParam = this.route.snapshot.paramMap.get('consoleId');

    if (!!idParam) { //if a paramater exists

      //create an array of games that use that console id (parameter is a console id)
      const id: number = parseInt(idParam);

      this.games = GAMES.filter(g => g.consoleId == id);
    }
    else
    {
      //if no parameter exists use the full list of games
      this.games = GAMES;
    }
  }


}
