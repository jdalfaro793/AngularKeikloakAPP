import {
  provideKeycloak,
  createInterceptorCondition,
  IncludeBearerTokenCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  withAutoRefreshToken,
  AutoRefreshTokenService,
  UserActivityService,
} from 'keycloak-angular';
import { environment } from '../environments/environments';

const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: new RegExp(`^${environment.api.url}(\/.*)?$`, 'i')
});

export const provideKeycloakAngular = () =>
  provideKeycloak({
    config: {
      url: environment.configuration.keycloak.issuer,
      realm: environment.configuration.keycloak.realm,
      clientId: environment.configuration.keycloak.clientId,
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      redirectUri: environment.configuration.url
    },
    features: [
      withAutoRefreshToken({
        onInactivityTimeout: 'logout', // Cerrar sesión tras un minuto de inactividad
        sessionTimeout: 60000 // Timeout de sesión de 1 minuto
      })
      
    ],
    providers: [
      AutoRefreshTokenService,
      UserActivityService,
      {
        provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
        useValue: [localhostCondition]
      }
    ]
  });