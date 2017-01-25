"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BeerReview_1 = require("../../vo/BeerReview");
var BeerCreateComponent = (function () {
    function BeerCreateComponent() {
        this.beerReview = {
            _id: 1,
            reviewContent: "First Review",
            reviewScore: 4,
            image: "no image",
            restaurant: "Pangyo Craftworks",
        };
        this.model = new BeerReview_1.BeerReview();
        this.submitted = false;
        // Google Map
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    BeerCreateComponent.prototype.addReview = function () {
        this.model = new BeerReview_1.BeerReview();
    };
    return BeerCreateComponent;
}());
BeerCreateComponent = __decorate([
    core_1.Component({
        selector: 'beer-create',
        templateUrl: 'app/components/beer-create/beer-create.component.html'
    })
], BeerCreateComponent);
exports.BeerCreateComponent = BeerCreateComponent;
//# sourceMappingURL=beer-create.component.js.map