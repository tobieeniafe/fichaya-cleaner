import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuardService implements CanActivate{

	constructor(private _auth:AuthService, private _router:Router){}

    canActivate(){
      if(this._auth.loggedIn()){
        return true;
      }else{
        this._router.navigate(['/cleaner/login']);
        return false
      }
    }

}
