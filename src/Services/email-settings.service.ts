import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailSettings } from 'src/classes/EmailSettings';

@Injectable({
  providedIn: 'root'
})
export class EmailSettingsService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:60724/api/EmailSettings/";

  getEmailSettingsList():Observable<Array<EmailSettings>>
  {
   
   return this.http.get<Array<EmailSettings>>(this.url+"getEmailSettingsList");
    
  }
}
