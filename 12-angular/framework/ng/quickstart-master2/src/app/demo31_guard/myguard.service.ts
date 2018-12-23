// a-guard-can-activate

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class MyGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //业务逻辑的判断和处理，
        //如果允许访问，返回true；否则返回false
        console.log(route,state)
        return true;
    }
}
