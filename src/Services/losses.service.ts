import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Losses} from 'src/classes/Losses'

@Injectable({
  providedIn: 'root'
})
export class LossesService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:60724/api/Losses/";

  getLossesList():Observable<Array<Losses>>
  {
   
   return this.http.get<Array<Losses>>(this.url+"getLossesList");
    
  }
}
