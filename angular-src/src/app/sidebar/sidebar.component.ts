import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SidebarService } from './sidebar.service';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	avatar: string = 'assets/images/avatar.png';
	loggedIn: boolean;
	loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
	user: any = {};
	
	ngOnInit() {}

	constructor(public _auth:AuthService, private router: Router, private sidebarService: SidebarService) {
		this.getUser()
	}

	setLoggedIn(value: boolean) {
	    // Update login status subject
		this.loggedIn$.next(value);
		this.loggedIn = value;
	}

	logOut(){
		Materialize.toast('logged out', 3000, 'green white-text');
		localStorage.removeItem('access_token');
		this.setLoggedIn(false);
    	this.router.navigate(['/cleaner/login']);
	}

	getUser(){
	    this.sidebarService.getUserName().subscribe(
	       (data: any) => {
	        if (data.success == true) { 
	        	// console.log(data)
	           this.user = data.cleaner.name;
	        } else {
	         	Materialize.toast("Something's not right 1", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 2", 1500, 'red white-text'),
	       () => console.log()
	    );
	}


}
