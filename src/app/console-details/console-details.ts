import { Component, OnInit } from '@angular/core'; //oninit allows thing to happen on initialize
import { GameConsole } from '../models/game-console';
import { ActivatedRoute } from '@angular/router';
import { CONSOLES } from '../mocks/consoles-mock';

@Component({
  selector: 'app-console-details',
  standalone: false,
  styleUrl: './console-details.css',
  templateUrl: './console-details.html',
})
export class ConsoleDetails {
  console?: GameConsole;

  constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('consoleId');

      if (!!idParam) {
        const id: number = parseInt(idParam);
        this.console = CONSOLES.find(c => c.id == id);
      }

  }
}
