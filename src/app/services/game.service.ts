import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {


    constructor(private http: HttpClient) { }
  

      getAll(): Observable<Game[]> {
      return this.http.get<Game[]>(`${environment.URL2}/games`);
      }

      getByUuid(uuid: string): Observable<Game> {
        return this.http.get<Game>(`${environment.URL}/games/${uuid}`);
      }



}
