export interface Game {
  id: number;
  uuid: string;
  name: string;
  minPlayer: number;
  maxPlayer: number;
  minTime: number;
  maxTime: number;
  minAge: number;
  creatorName: string;
}
