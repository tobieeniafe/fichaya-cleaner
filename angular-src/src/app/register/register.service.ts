import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

	constructor(private httpClient: HttpClient) {}

	uploadImage(fileToUpload) {
	    const endpoint = 'https://api.imgur.com/3/image';

	    let formData = new FormData();
	    formData.append('image', fileToUpload, fileToUpload.name);

	    let httpOptions = {
	      headers: new HttpHeaders({
	        'Authorization': 'Client-ID aab3505f42b5d63'
	      })
	    };
	    
	    return this.httpClient.post(endpoint, formData, httpOptions)
	}

}
