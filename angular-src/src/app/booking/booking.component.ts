import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from './booking.service';
declare var Materialize: any;
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

	title: string = 'Booking'
	bookings: any;

	constructor(private router: Router, private bookingService: BookingService) {
		this.getBookings()
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

	getBookings(){
		this.bookingService.getBookings().subscribe(
			(data: any) => {
				if (data.success == true) { 
					Materialize.toast(data.message, 5500, 'green white-text')
					this.bookings = data.gigs
					//console.log(data.gigs)
				} else {
					Materialize.toast("error getting booking", 1500, 'red white-text')
				}
			},
			err => Materialize.toast("error occured", 3000, 'red white-text'),
			() => console.log()
		);
	}

	markAsComplete(id){
		this.bookingService.markAsComplete({gig_id: id}).subscribe(
			(data: any) => {
				if (data.success == true) { 
					Materialize.toast(data.message, 5500, 'green white-text')
					this.getBookings()
				} else {
					Materialize.toast("unable to mark as complete", 1500, 'red white-text')
				}
			},
			err => Materialize.toast("error occured", 3000, 'red white-text'),
			() => console.log()
		);

	}

}
