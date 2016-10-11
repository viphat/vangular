import { Component } from '@angular/core';

@Component({
  selector: 'ns-races',
  template: `
    <h2>Races</h2>
    <button (click)="refreshRaces()">Refresh the races list</button>
    <p *ngIf='races.length > 0' [textContent]="races?.length + ' races'"></p>
    <input type='text' #name />
    <button on-click='name.focus()'>Focus the Input</button>
    <ul>
      <li *ngFor='let race of races; let i=index' [textContent]=" i+1 + '. ' + race.name"></li>
    </ul>
  `
})

export class RacesComponent {
  races: Array<any> = [];

  refreshRaces() {
    this.races = [ { name: 'Quế Hương' }, { name: 'Vì Phát' } ]
  }

}
