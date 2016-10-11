import { Component } from '@angular/core';
import { RaceService } from './services/race.service'

@Component({
  selector: 'ponyracer-app',
  template: `
    <h1>PonyRacer</h1>
    <p [textContent]="'Welcome ' + user?.name"></p>
    <p>{{ list() }}</p>
    <ns-races></ns-races>
  `
})

export class PonyRacerAppComponent{

  constructor(private raceService: RaceService){}

  numberOfUsers: number = 146;
  user: any = {name: 'Quế Hương'};

  list() {
    return this.raceService.list()
  }

}
