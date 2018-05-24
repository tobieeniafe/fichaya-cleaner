import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

	title: string = 'Account Settings'
	user = new User();
	locations: any ;
	subscriptions: any;
	types: any;

	constructor(private router: Router, private accountService: AccountService) {
		this.getUser()
		$(document).ready(function(){
			$('.side-nav-open').sideNav({
			      menuWidth: 300,
			      edge: 'left',
			      closeOnClick: true,
			      draggable: true,
			      onOpen: function(el) {},
			      onClose: function(el) {}
			    }
			);
		});
	}

	ngOnInit() {}

	getUser(){
	    this.accountService.getUserDetails().subscribe(
	       (data: any) => {
	        if (data.success == true) {
	           console.log(data.cleaner)
	        } else {
	         	Materialize.toast("Something's not right 1", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 2", 1500, 'red white-text'),
	       () => $(document).ready(function() {
	       			$('select').material_select()
	       		})
	    );
	}


	updateDetails(s,l,t){
		
		let query = {
			
		};
		
		//console.log(query)
		
		this.accountService.updateDetails(query).subscribe(
	       (data: any) => {
	        if (data.success == true) { 
	           Materialize.toast(data.message, 1500, 'green white-text')
	           // this.getUser()
	        } else {
	         	Materialize.toast("Something's not right", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right", 1500, 'red white-text'),
	       () => console.log()
	    );
	}
}



export class User {
    name: any = {
    	firstname: '',
    	lastname: ''
    };
    phone: string;
    email: string;
    address: any = {
    	address: '',
    	busstop: '',
    	location: '',
    	area: ''
    };
    plan: any = {
    	type: '',
    	subscription: ''
    };
    locations: string[] = []
    subscriptions: string[] = [];
    types: string[] = [];
}