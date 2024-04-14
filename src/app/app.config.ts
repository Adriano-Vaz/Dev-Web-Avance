import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAuth, LogLevel, AuthModule} from 'angular-auth-oidc-client';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";

// @ts-ignore
/*@NgModule({
  // ...
  imports: [
    // ...
    AuthModule.forRoot({
      config: {
        authority: '<your authority address here>',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '<your clientId>',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  // ...
})*/

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(),
  provideAuth({config: {
      authority: 'http://localhost:8080/realms/network-manager',
      redirectUrl: "http://localhost:4200",
      postLogoutRedirectUri: "http://localhost:4200",
      clientId: 'angular-client',
      scope: 'openid email profile roles web-origins',
      responseType: 'id_token token',
      silentRenew: true,
      useRefreshToken: true,
      logLevel: LogLevel.Debug,
    }})]
};
