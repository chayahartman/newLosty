import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/classes/Items';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:60724/api/Users/";

  getCountItems():Observable<Array<String>>
  {
   
   return this.http.get<Array<String>>(this.url+"getCountItems");
    
    
    


  }
}
