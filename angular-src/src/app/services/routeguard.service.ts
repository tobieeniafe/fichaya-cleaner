import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class RouteGuardService {

	constructor(private _auth:AuthService, private _router:Router) {}

	canActivate(){
      if(this._auth.loggedIn()){
        this._router.navigate(['/customer/dashboard']);
      }
      return true
    }

}
