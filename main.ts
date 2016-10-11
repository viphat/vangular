import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { RaceService } from './services/race.service';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(
    appRef => playWithInjector(appRef.injector)
  );


function playWithInjector(injector){
  console.log(injector.get(RaceService));
  console.log(injector.get('RaceServiceAlternative'));
  console.log(injector.get('RaceServiceAlternative') === injector.get(RaceService));
}
