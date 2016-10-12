import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './services/race.service';
import { ApiService } from './services/api.service';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const IS_PRODUCTION = false;

@NgModule({
  imports: [BrowserModule],
  declarations: [PonyRacerAppComponent, RacesComponent],
  providers: [
    ApiService,
    {
      provide: RaceService,
      useFactory: (apiService) => IS_PRODUCTION ? new RaceService(apiService) : new FakeRaceService(),
      deps: [ApiService]
    },
    //NOTE: Be careful, the order of the parameters should be the same as the order in the array if you have several dependencies!
    //The dependencies declared in the root injector are available for every component in the app. For example, ApiService and RaceService can be used everywhere
    //If you declare a dependency in the module of your app and in the providers attribute of your component (mean you have declared it twice, one in parent injector and one in current injector), there will be two distinct instances of this dependency created and used
    { provide: 'RaceServiceAlternative', useClass: RaceService }
  ],
  bootstrap: [PonyRacerAppComponent]
})

export class AppModule {

}

class FakeRaceService {
  list() {
    return [{name: 'Quế Hương'}];
  }
}
