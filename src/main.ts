import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId:       'us-east-1_PMkd9Ad57',
      userPoolClientId: '45f21rv5f9plon2v7qfo47pj38',
      loginWith: {
        oauth: {
          domain:          'us-east-1pmkd9ad57.auth.us-east-1.amazoncognito.com',
          scopes:          ['openid', 'profile', 'biblioteca/libros.leer'],
          redirectSignIn:  ['http://localhost:4200/callback'],
          redirectSignOut: ['http://localhost:4200'],
          responseType:    'code',
        },
      },
    },
  },
});

import 'aws-amplify/auth/enable-oauth-listener';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
