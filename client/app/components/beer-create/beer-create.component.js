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
var core_1 = require("@angular/core");
var BeerReview_1 = require("../../vo/BeerReview");
var hero_service_1 = require("../../services/hero.service");
var BeerCreateComponent = (function () {
    function BeerCreateComponent(heroService) {
        this.heroService = heroService;
        this.beerReview = new BeerReview_1.BeerReview();
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    BeerCreateComponent.prototype.addReview = function () {
        console.log(this.beerReview);
        this.heroService.addHeroes(this.beerReview).subscribe();
    };
    return BeerCreateComponent;
}());
BeerCreateComponent = __decorate([
    core_1.Component({
        selector: 'beer-create',
        templateUrl: 'app/components/beer-create/beer-create.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], BeerCreateComponent);
exports.BeerCreateComponent = BeerCreateComponent;
//# sourceMappingURL=beer-create.component.js.map