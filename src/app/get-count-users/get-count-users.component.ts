import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/Services/users-service.service';

@Component({
  selector: 'app-get-count-users',
  templateUrl: './get-count-users.component.html',
  styleUrls: ['./get-count-users.component.css']
})
export class GetCountUsersComponent {

  result:any;
  constructor(public UsersService:UsersService) { }
  getResult()
  {
   this.result=this.UsersService.getCount();
   return this.result;
  }
 

}
