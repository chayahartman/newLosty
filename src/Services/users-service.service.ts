import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private _http:HttpClient) { }
  result:any;
  getCount(){
    {
      this._http.get("/api/User").subscribe(res=>{
       debugger
        console.log(res);
        this.result= res;
      })
        return this.result;
    }
  }
}
