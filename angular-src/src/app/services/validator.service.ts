import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }

  ValidateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  ValidateLoginEmail(customer){
    if(customer.email == undefined ||  customer.password == undefined){
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

  ValidateLoginPhone(customer){
    if(customer.phone == undefined ||  customer.password == undefined){
      return false
    }else{
      return true
    }
  }

}
