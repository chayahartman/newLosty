import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/classes/Items';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:60724/api/Items/";

  getItemsList():Observable<Array<Items>>
  {
   
   return this.http.get<Array<Items>>(this.url+"getItemsList");
    
  }

  delete(itemId:number):Observable<Array<Items>>
  {
    return this.http.delete<Array<Items>>(this.url+"DeleteItem/"+itemId);
  }
}
