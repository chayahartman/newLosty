import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Findings } from 'src/classes/Findings';

@Injectable({
  providedIn: 'root'
})
export class FindingsService {

  url:string="http://localhost:60724/api/Findings/";
  constructor(private http:HttpClient ) { }

  getFindingsList():Observable<Array<Findings>>
  {
   
   return this.http.get<Array<Findings>>(this.url+"GetFindingsList");
  }
}
