import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import Keycloak from 'keycloak-js';

/**
 * The logic below is a simple example, please make it more robust when implementing in your application.
 *
 * Reason: isAccessGranted is not validating the resource, since it is merging all roles. Two resources might
 * have the same role name and it makes sense to validate it more granular.
 */
const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  __: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const { authenticated, grantedRoles } = authData;

  console.log('Authenticated:', authenticated);
  console.log('Granted Roles:', grantedRoles);

  const router = inject(Router);
  const keycloak = inject(Keycloak);

  if (!authenticated) {
    await keycloak.login(); // Redirige al formulario de inicio de sesión
    return false; // Evita la navegación a la ruta hasta que se autentique
  }


  const requiredRoles: string[] = route.data['roles']; // Aceptar múltiples roles
  console.log('Required Roles:', requiredRoles); // Ver los roles requeridos

  if (!requiredRoles || requiredRoles.length === 0) {
    console.log('No roles required, access denied');
    return false;
  }

  const hasRequiredRole = (roles: string[]): boolean => 
    roles.some((role) => {
      const roleMatchInRealmRoles = grantedRoles.realmRoles.includes(role);
      
      console.log(`Checking if user has role "${role}" in realmRoles: ${roleMatchInRealmRoles}`);
      
      return roleMatchInRealmRoles;
    });

  if (authenticated && hasRequiredRole(requiredRoles)) {
    console.log('Access granted');
    return true;
  }

  return router.parseUrl('/forbidden');
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);


 