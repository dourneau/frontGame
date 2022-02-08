import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { AccueilPage } from './pages/accueil/accueil.page';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: AccueilPage},
  {path: "games", component: GameComponent},
  {path: "games/:uuid", component: GameDetailComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
