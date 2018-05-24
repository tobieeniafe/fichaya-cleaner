import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
	
	constructor(private router: Router) {
		$(document).ready(function(){
			
			//customer sidebar
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

}