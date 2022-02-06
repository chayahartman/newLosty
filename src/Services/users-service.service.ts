import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/classes/Users';

@Injectable()
export class UsersService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:60724/api/Users/"
  result:any;
  getCount(){
    {
      this.http.get(this.url+"getCountUsers").subscribe(res=>{
       debugger
        console.log(res);
        this.result= res;
      })
        return this.result;
    } }

    getUsersList():Observable<Array<Users>>
    {
      return this.http.get<Array<Users>>(this.url+"GetUsersList");
    }


    
}
