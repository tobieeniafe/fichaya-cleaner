import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Api } from '../api'

@Injectable()
export class AuthService {

	api = new Api().endpoint;
	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};

	constructor(private http: HttpClient) {}

	registerCleaner(cleaner){
	    return this.http.post(this.api+'/cleaner/register', cleaner, this.httpOptions)
	}

	loginCleanerEmail(cleaner){
		return this.http.post(this.api+'/cleaner/login', cleaner, this.httpOptions)
	}

	loginCleanerPhone(cleaner){
		return this.http.post(this.api+'/cleaner/login_phone', cleaner, this.httpOptions)
	}

	loggedIn(){
		return tokenNotExpired()
	}

}