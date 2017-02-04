"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("./modules/rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./modules/app-routing.module");
var beer_grid_component_1 = require("./components/beer-grid/beer-grid.component");
var beer_detail_component_1 = require("./components/beer-detail/beer-detail.component");
var beer_create_component_1 = require("./components/beer-create/beer-create.component");
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
var hero_service_1 = require("./services/hero.service");
var core_2 = require("angular2-google-maps/core");
// import { MaterializeDirective } from "angular2-materialize";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            // InMemoryWebApiModule.forRoot(InMemoryDataService),
            core_2.AgmCoreModule.forRoot({
                apiKey: '../mapKey.json'
            })
        ],
        declarations: [app_component_1.AppComponent, beer_grid_component_1.BeerGridComponent, beer_detail_component_1.BeerDetailComponent, beer_create_component_1.BeerCreateComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            hero_service_1.HeroService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map