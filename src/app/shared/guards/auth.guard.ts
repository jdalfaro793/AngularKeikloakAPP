import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import Keycloak from 'keycloak-js';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  __: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const { authenticated, grantedRoles } = authData;
  
  const router = inject(Router);
  const keycloak = inject(Keycloak);

  if (!authenticated) {
    await keycloak.login(); 
    return false;  
  }

  const requiredRoles: string[] = route.data['roles']; 

  if (!requiredRoles || requiredRoles.length === 0) {
    console.log('No roles required, access denied');
    return false;
  }

  const hasRequiredRole = (roles: string[]): boolean => 
    roles.some((role) => {
      const roleMatchInRealmRoles = grantedRoles.realmRoles.includes(role);      
      return roleMatchInRealmRoles;
    });

  if (authenticated && hasRequiredRole(requiredRoles)) {
     return true;
  }

  return router.parseUrl('/forbidden');
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);


 