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

	title: string = 'Account Details'
	cleaner = new Cleaner();
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
	preloader: boolean = false;

	constructor(private router: Router, private accountService: AccountService) {
		this.getCleaner()
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

	getCleaner(){
	    this.accountService.getUserDetails().subscribe(
	       (data: any) => {
	        if (data.success == true) {
	           // console.log(data.cleaner)
	           this.cleaner = data.cleaner
	        } else {
	         	Materialize.toast("Something's not right", 1500, 'red white-text')
	         	Materialize.toast(data.message, 1500, 'red white-text')
	        }
	       },
	       err => Materialize.toast("Something's not right 1", 1500, 'red white-text'),
	       () => $(document).ready(function() {
	       			$('select').material_select()
	       		 })
	    );
	}


	updateDetails(bank_name){
		this.preloader = true
		let query = {
			phone: this.cleaner.phone,
			bvn: this.cleaner.bank_details.bvn, 
			bank: bank_name,
			account_no: this.cleaner.bank_details.account_no, 
			account_name: this.cleaner.bank_details.account_name
		};
		// console.log(query)
		
		this.accountService.updateDetails(query).subscribe(
	       (data: any) => {
	        if (data.success == true) { 
	           Materialize.toast(data.message, 1500, 'green white-text')
	           this.preloader = false
	           // this.getCleaner()
	        } else {
	         	Materialize.toast(data.message, 1500, 'red white-text')
	         	this.preloader = false
	        }
	       },
	       err => (Materialize.toast("Something's not right 2", 1500, 'red white-text'), this.preloader = false),
	       () => this.preloader = false
	    );
	}
}



export class Cleaner {
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
    bank_details: any = {
    	bvn: '',
    	bank: '',
    	account_no: '',
    	account_name: ''
    }
}