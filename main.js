"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var race_service_1 = require('./services/race.service');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (appRef) { return playWithInjector(appRef.injector); });
function playWithInjector(injector) {
    console.log(injector.get(race_service_1.RaceService));
    console.log(injector.get('RaceServiceAlternative'));
    console.log(injector.get('RaceServiceAlternative') === injector.get(race_service_1.RaceService));
}
//# sourceMappingURL=main.js.map