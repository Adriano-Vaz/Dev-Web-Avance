import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAuth, LogLevel, AuthModule} from 'angular-auth-oidc-client';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(),
  provideAuth({config: {
      authority: 'http://localhost:8081/realms/network-manager',
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
