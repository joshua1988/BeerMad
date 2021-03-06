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
var hero_service_1 = require("../../services/hero.service");
var BeerGridComponent = (function () {
    function BeerGridComponent(heroService) {
        this.heroService = heroService;
    }
    BeerGridComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    BeerGridComponent.prototype.getHeroes = function () {
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        var _this = this;
        // this.heroService.getHeroes()
        //              .subscribe(
        //                heroes => this.heroes = heroes,
        //                error =>  this.errorMessage = <any>error);
        this.heroService.getHeroes().subscribe(function (reviews) { return _this.beerReviews = reviews; }, function (error) { return _this.errorMessage = error; });
    };
    return BeerGridComponent;
}());
BeerGridComponent = __decorate([
    core_1.Component({
        selector: 'beer-grid',
        templateUrl: 'app/components/beer-grid/beer-grid.component.html',
        styleUrls: ['app/components/beer-grid/beer-grid.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], BeerGridComponent);
exports.BeerGridComponent = BeerGridComponent;
//# sourceMappingURL=beer-grid.component.js.map