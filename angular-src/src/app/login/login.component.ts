import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidatorService } from '../services/validator.service';
declare var Materialize: any;
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginvalue: string;
	password: string;
	preloader: boolean = false;
	

  constructor(private router: Router, private _auth:AuthService, private _validateService: ValidatorService) {
		$(document).ready(function(){
		    
		});
	}

	ngOnInit() {}

	submitForm(){
		if (this.loginvalue == undefined || this.loginvalue == null) { 
			Materialize.toast('Form cannot be empty', 3000, 'red white-text');
			return false
		} else {
			if (this._validateService.ValidateEmail(this.loginvalue)) { 
				this.submitEmailForm();
			} else {
				this.submitPhoneForm();
			}
		}
		
	}

	submitEmailForm(){
		this.preloader = true
		const cleaner = {
			email: this.loginvalue,
			password: this.password
		}
		
		if(!this._validateService.ValidateEmail(cleaner.email)){
		  Materialize.toast('Invalid email', 3000, 'red white-text');
		  this.preloader = false
		  return false;
		}

		if(!this._validateService.ValidateLoginEmail(cleaner)){
		  Materialize.toast('Invalid login parameters', 3000, 'red white-text');
		  this.preloader = false
		  return false;
		}

		this._auth.loginCleanerEmail(cleaner).subscribe(
	        (data: any) => {
	          if(data.success == false){
	            Materialize.toast(data.message, 3000, 'red white-text');
	            this.preloader = false
	          }else if (data.success == true){
	          	Materialize.toast(data.message, 3000, 'green white-text');
	          	localStorage.setItem('token', data.token);
	            this.router.navigate(['/cleaner/dashboard']);
	          }else{
	          	Materialize.toast('uh-oh', 3000, 'red white-text');
	          	this.preloader = false
	            this.router.navigate(['/cleaner/login']);
	          }
	        },
	        err => (Materialize.toast("something's not right", 3000, 'red white-text')),
	        () =>  console.log()
	    );
	}

	submitPhoneForm(){
		this.preloader = true
		const cleaner = {
			phone: this.loginvalue,
			password: this.password
		}

		if(!this._validateService.ValidatePhone(cleaner.phone)){
		  Materialize.toast("Invalid phone number or email", 3000, 'red white-text');
		  this.preloader = false
		  return false;
		}

		if(!this._validateService.ValidateLoginPhone(cleaner)){
		  Materialize.toast("Invalid login prarameters", 3000, 'red white-text')
		  this.preloader = false
		  return false;
		}

		this._auth.loginCleanerPhone(cleaner).subscribe(
	        (data: any) => {
	          if(data.success == false){
	            Materialize.toast(data.message, 3000, 'red white-text');
	            this.preloader = false
	          }else if (data.success == true){
	          	Materialize.toast(data.message, 3000, 'green white-text');
	          	localStorage.setItem('token', data.token);
	            this.router.navigate(['/cleaner/dashboard']);
	          }else{
	          	Materialize.toast('uh-oh', 3000, 'red white-text');
	          	this.preloader = false
	            this.router.navigate(['/cleaner/login']);
	          }
	        },
	        err => (Materialize.toast("something's not right", 3000, 'red white-text')),
	        () =>  console.log()
	    );
	}

}

