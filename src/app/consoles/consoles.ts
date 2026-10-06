import { Component } from '@angular/core';
import { GameConsole } from '../models/game-console'; //added imports
import { CONSOLES } from '../mocks/consoles-mock'; //import

@Component({
  selector: 'app-consoles',
  standalone: false,
  styleUrl: './consoles.css',
  templateUrl: './consoles.html',
})
export class Consoles {
  //added an array of GameConsole objects populated with the contents of CONSOLES (consoles-mock.ts)
  consoles: GameConsole[] = CONSOLES;
}
