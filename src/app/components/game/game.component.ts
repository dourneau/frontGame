import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameList: Game[] = [];

  constructor(private gameService: GameService) {
   
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.gameService.getAll().subscribe({
      next: data => this.gameList = data,
      error: err => console.error(err),
      complete: () => console.log("récupération de tous les jeux finie")
    })
  }

}
