import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './services/race.service';
import { ApiService } from './services/api.service';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [BrowserModule],
  declarations: [PonyRacerAppComponent, RacesComponent],
  providers: [
    ApiService,
    RaceService,
    { provide: 'RaceServiceAlternative', useClass: RaceService }
  ],
  bootstrap: [PonyRacerAppComponent]
})

export class AppModule {

}
