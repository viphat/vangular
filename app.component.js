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
var race_service_1 = require('./services/race.service');
var PonyRacerAppComponent = (function () {
    function PonyRacerAppComponent(raceService) {
        this.raceService = raceService;
        this.numberOfUsers = 146;
        this.user = { name: 'Quế Hương' };
    }
    PonyRacerAppComponent.prototype.list = function () {
        return this.raceService.list();
    };
    PonyRacerAppComponent = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            template: "\n    <h1>PonyRacer</h1>\n    <p [textContent]=\"'Welcome ' + user?.name\"></p>\n    <p>{{ list() }}</p>\n    <ns-races></ns-races>\n  "
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerAppComponent);
    return PonyRacerAppComponent;
}());
exports.PonyRacerAppComponent = PonyRacerAppComponent;
//# sourceMappingURL=app.component.js.map