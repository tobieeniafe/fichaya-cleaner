import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidatorService } from '../services/validator.service';
import { RegisterService } from './register.service'
declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	allBanks: any = [
	    {name:"Access Bank",slug:"access-bank",code:"044",longcode:"044150149"},
	    {name:"Citibank Nigeria",slug:"citibank-nigeria",code:"023",longcode:"023150005"},
	    {name:"Diamond Bank",slug:"diamond-bank",code:"063",longcode:"063150162"},
	    {name:"Ecobank Nigeria",slug:"ecobank-nigeria",code:"050",longcode:"050150010"},
	    {name:"Enterprise Bank",slug:"enterprise-bank",code:"084",longcode:"084150015"},
	    {name:"Fidelity Bank",slug:"fidelity-bank",code:"070",longcode:"070150003"},
	    {name:"First Bank of Nigeria",slug:"first-bank-of-nigeria",code:"011",longcode:"011151003"},
	    {name:"First City Monument Bank",slug:"first-city-monument-bank",code:"214",longcode:"214150018"},
	    {name:"Guaranty Trust Bank",slug:"guaranty-trust-bank",code:"058",longcode:"058152036"},
	    {name:"Heritage Bank",slug:"heritage-bank",code:"030",longcode:"030159992"},
	    {name:"Keystone Bank",slug:"keystone-bank",code:"082",longcode:"082150017"},
	    {name:"MainStreet Bank",slug:"mainstreet-bank",code:"014",longcode:"014150331"},
	    {name:"Skye Bank",slug:"skye-bank",code:"076",longcode:"076151006"},
	    {name:"Stanbic IBTC Bank",slug:"stanbic-ibtc-bank",code:"221",longcode:"221159522"},
	    {name:"Standard Chartered Bank",slug:"standard-chartered-bank",code:"068",longcode:"068150015"},
	    {name:"Sterling Bank",slug:"sterling-bank",code:"232",longcode:"232150016"},
	    {name:"Union Bank of Nigeria",slug:"union-bank-of-nigeria",code:"032",longcode:"032080474"},
	    {name:"United Bank For Africa",slug:"united-bank-for-africa",code:"033",longcode:"033153513"},
	    {name:"Unity Bank",slug:"unity-bank",code:"215",longcode:"215154097"},
	    {name:"Wema Bank",slug:"wema-bank",code:"035",longcode:"035150103"},
	    {name:"Zenith Bank",slug:"zenith-bank",code:"057",longcode:"057150013"},
	    {name:"Jaiz Bank",slug:"jaiz-bank",code:"301",longcode:"301080020"},
	    {name:"Suntrust Bank",slug:"suntrust-bank",code:"100",longcode:""},
	    {name:"Providus Bank",slug:"providus-bank",code:"101",longcode:""},
	    {name:"Parallex Bank",slug:"parallex-bank",code:"526",longcode:""}
	];
	fileToUpload: File = null;
	filename: string;
	firstname: string;
	lastname: string;
	email: string;
	address: string;
	busstop: string;
	area: string;
	phone: string;
	password: string;
	cpassword: string;
	g_firstname: string;
	g_lastname: string;
	g_phone: string;
	g_email: string;
	g_address: string;
	account_name: string;
	accont_no: string;
	bvn: string;
	bank: string;
	id_type: string;
	id_url: string;
	experience: string;
	location: string;
	cleaner: any = {};
	submitting: boolean = false;
	imageUploaded: boolean = false;
	imageisUploading: boolean = false


	constructor(private router: Router, private registerService: RegisterService, private authService:AuthService, private validatorService: ValidatorService) {
		$(document).ready(function() {
	       	$('select').material_select()

	       	$(".show-identification").click(function(){
			    $('.personal').fadeOut('1')
			    $('.payment-details').fadeOut('1')
			    $('.identification').fadeIn('1500')
			});

			$(".show-personal").click(function(){
			    $('.identification').fadeOut('1')
			    $('.payment-details').fadeOut('1')
			    $('.personal').fadeIn('1500')
			});

			$(".show-payment-details").click(function(){
			    $('.personal').fadeOut('1')
			    $('.identification').fadeOut('1')
			    $('.payment-details').fadeIn('1500')
			});
	    })
	}

	ngOnInit() {}

	handleFileInput(file) {
	    this.fileToUpload = <File>file.target.files[0];
	    this.filename = this.fileToUpload.name
	    this.getFileExtention(this.filename)
	}

	uploadFileToActivity() {
		this.imageisUploading = true
	    this.registerService.uploadImage(this.fileToUpload).subscribe(
	    	(data: any) => {
	    		if (data.success == true) { 
	    			// console.log(data)
	    			this.id_url = data.data.link
		    		this.imageisUploading = false
		    		this.imageUploaded = true
		    		Materialize.toast('Image upload successful', 1500, 'green white-text');
	    		} else {
	    			this.imageisUploading = false
		    		this.imageUploaded = false
		    		Materialize.toast('Image upload failed', 1500, 'red white-text');
	    		}	
	    	},
	    	err => (Materialize.toast('Image upload failed', 1500, 'red white-text'),this.imageisUploading = false)
	    );
	}

	getFileExtention(fname){
		let extension = fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2)
		if (extension !== 'jpg' && extension !== 'png') { 
			Materialize.toast('Selected file is not an image', 3000, 'red white-text');
		} else {
			this.uploadFileToActivity()
		}
	}

	submitForm(location, experience, bank){
		this.submitting = true
		this.cleaner = {
			lastname: this.lastname,
			firstname: this.firstname,
			email: this.email,
			password: this.password,
			cpassword: this.cpassword,
			address: this.address,
			busstop: this.busstop,
			location: location,
			area: this.area,
			phone: this.phone,
			id_type: this.id_type,
			id_url: this.id_url,
			g_firstname: this.g_firstname,
			g_lastname: this.g_lastname,
			g_phone: this.g_phone,
			g_email: this.g_email,
			g_address: this.g_address,
			account_name: this.account_name,
			accont_no: this.accont_no,
			bvn: this.bvn,
			bank: bank,
			experience: experience
		}
		console.log(this.cleaner)

		if(!this.validatorService.ValidateRegistrationForm(this.cleaner)){
		  Materialize.toast('All fields are required', 2000, 'red white-text');
		  this.submitting = false;
		  return false;
		}

		if(this.cleaner.password !== this.cleaner.cpassword){
		  Materialize.toast('Passwords do not match', 2000, 'red white-text');
		  this.submitting = false;
		  return false;
		}

		if(!this.validatorService.ValidateEmail(this.cleaner.email)){
		  Materialize.toast('Invalid email', 2000, 'red white-text');
		  this.submitting = false;
		  return false;
		}

		if(!this.validatorService.ValidateEmail(this.cleaner.g_email)){
		  Materialize.toast('Invalid guarantor email', 2000, 'red white-text');
		  this.submitting = false;
		  return false;
		}

		this.authService.registerCleaner(this.cleaner).subscribe(
	        (data: any) => {
		        if (data.success == true) { 
		        	// console.log(data)
		        	Materialize.toast(data.message, 6500, 'green white-text')
		        	this.router.navigate(['/cleaner/login']);
		        } else {
		         	Materialize.toast(data.message, 1500, 'red white-text')
		         	this.submitting = false;
		        }
	        },
	        err => (Materialize.toast("Something's not right 1", 1500, 'red white-text'),this.submitting = false),
	        () => this.submitting = false
	    );
	}

}
