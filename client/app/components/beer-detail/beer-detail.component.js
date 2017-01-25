"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BeerDetailComponent = (function () {
    function BeerDetailComponent() {
        // title = 'Tour of Heroes';
        this.name = 'Beer is the proof that God loves us';
    }
    return BeerDetailComponent;
}());
BeerDetailComponent = __decorate([
    core_1.Component({
        selector: 'beer-detail',
        template: "\n    <p>Let's see the detail view</p>\n    <div>{{name}}</div>\n  "
    })
], BeerDetailComponent);
exports.BeerDetailComponent = BeerDetailComponent;
//# sourceMappingURL=beer-detail.component.js.map