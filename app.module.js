"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var races_component_1 = require('./races.component');
var race_service_1 = require('./services/race.service');
var api_service_1 = require('./services/api.service');
var IS_PRODUCTION = false;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.PonyRacerAppComponent, races_component_1.RacesComponent],
            providers: [
                api_service_1.ApiService,
                {
                    provide: race_service_1.RaceService,
                    useFactory: function (apiService) { return IS_PRODUCTION ? new race_service_1.RaceService(apiService) : new FakeRaceService(); },
                    deps: [api_service_1.ApiService]
                },
                //NOTE: Be careful, the order of the parameters should be the same as the order in the array if you have several dependencies!
                //The dependencies declared in the root injector are available for every component in the app. For example, ApiService and RaceService can be used everywhere
                //If you declare a dependency in the module of your app and in the providers attribute of your component (mean you have declared it twice, one in parent injector and one in current injector), there will be two distinct instances of this dependency created and used
                { provide: 'RaceServiceAlternative', useClass: race_service_1.RaceService }
            ],
            bootstrap: [app_component_1.PonyRacerAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var FakeRaceService = (function () {
    function FakeRaceService() {
    }
    FakeRaceService.prototype.list = function () {
        return [{ name: 'Quế Hương' }];
    };
    return FakeRaceService;
}());
//# sourceMappingURL=app.module.js.map