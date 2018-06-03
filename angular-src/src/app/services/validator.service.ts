import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }

  ValidateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  ValidateLoginEmail(cleaner){
    if(cleaner.email == undefined || cleaner.password == undefined){
      return false
    }else{
      return true
    }
  }

  ValidatePhone(phone){
    if(phone.length != 11){
      return false
    }else{
      return true
    }
  }

  ValidateLoginPhone(cleaner){
    if(cleaner.phone == undefined || cleaner.password == undefined){
      return false
    }else{
      return true
    }
  }

  ValidateRegistrationForm(cleaner){
    if(cleaner.lastname == undefined || cleaner.firstname == undefined || cleaner.email  == undefined || 
       cleaner.password  == undefined || cleaner.address  == undefined || cleaner.busstop  == undefined || 
       cleaner.location  == undefined || cleaner.area  == undefined || cleaner.phone  == undefined || 
       cleaner.id_type  == undefined || cleaner.id_url  == undefined || cleaner.g_firstname  == undefined || 
       cleaner.g_lastname  == undefined || cleaner.g_phone  == undefined || cleaner.g_email  == undefined || 
       cleaner.g_address  == undefined || cleaner.account_name  == undefined || cleaner.account_no  == undefined || 
       cleaner.bvn  == undefined || cleaner.bank  == undefined || cleaner.experience  == undefined){
      return false
    }else{
      return true
    }
  }

}
