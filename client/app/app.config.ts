import { OpaqueToken } from "@angular/core";

export let appConfig = new OpaqueToken('app.config');

export interface IAppConfig {
    apiKey: string
}

export const GoogleMapApiKey : IAppConfig = {
    apiKey: "Key"
};

export const LazyMapsAPILoaderConfig : IAppConfig = {
    apiKey: "slkjdflkjsf"
};
