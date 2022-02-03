import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private _http:HttpClient) { }
  result:any;
  url:string="http://localhost:60724/api/Users/"
  getCount(){
    {
      this._http.get(this.url+"getCountUsers").subscribe(res=>{
       debugger
        console.log(res);
        this.result= res;
      })
        return this.result;
    }
  }
}
