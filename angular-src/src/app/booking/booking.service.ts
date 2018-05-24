import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

	token: any;
	api = new Api().endpoint

	constructor(private http: HttpClient) {
		this.http = http;
	    this.token = localStorage.getItem('token');
	}

	getBookings() {
		this.token = localStorage.getItem('token');
	    let httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'x-access-token': this.token 
		  })
		};
	    return this.http.get(this.api+'/cleaner/view_gigs', httpOptions)
	}

	markAsComplete(id) {
		this.token = localStorage.getItem('token');
	    let httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'x-access-token': this.token 
		  })
		};
	    return this.http.put(this.api+'/cleaner/gig/complete', id, httpOptions)
	}

}
