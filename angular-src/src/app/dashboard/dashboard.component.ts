import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	title: string = 'Dashboard'
	verified: boolean
	
	constructor(private router: Router, private sidebarService: SidebarService) {
		this.getUser()
		$(document).ready(function(){	
			$('.side-nav-open').sideNav({
			      menuWidth: 300,
			      edge: 'left',
			      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			      draggable: true,
			      onOpen: function(el) { /* Do Stuff*/ },
			      onClose: function(el) { /* Do Stuff*/ }
			    }
			);
		});
	}

	ngOnInit() {}

	getUser(){
	    this.sidebarService.getUserName().subscribe(
	       (data: any) => {
	        if (data.success == true) { 
	        	// console.log(data)
	           this.verified = data.cleaner.is_verified;
	        } else {
	         	Materialize.toast("Something's not right 1", 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 2", 1500, 'red white-text'),
	       () => console.log()
	    );
	}

}