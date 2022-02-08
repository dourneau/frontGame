import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  uuid: string = ""

  public game: Game = {id: 0,uuid: "", name: "",minPlayer: 0, maxPlayer: 0, minTime: 0, maxTime: 0, minAge: 0, creatorName: ""}
  
  constructor(private route: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.paramMap.get('uuid')!;

    this.gameService.getByUuid(this.uuid).subscribe({
      next: data => {this.game = data;console.log(data);},
      error: err => this.router.navigate(['404'])
    });
  }

  

}
