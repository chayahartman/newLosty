import { Component, OnInit } from '@angular/core';
import { LossesService } from 'src/Services/losses.service';
import { Losses } from 'src/classes/Losses';
import { EmailSettings } from 'src/classes/EmailSettings';
import { EmailSettingsService } from 'src/Services/email-settings.service';
import { Users } from 'src/classes/Users';
import { UsersService } from 'src/Services/users.service';
import { Findings } from 'src/classes/Findings';
import { FindingsService } from 'src/Services/findings.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lsLosses:Array<Losses>=new Array<Losses>();
  lsEs:Array<EmailSettings>=new Array<EmailSettings>();
  lsUsers:Array<Users>=new Array<Users>();
  lsFindings:Array<Findings>=new Array<Findings>();
  constructor(private LossesService:LossesService,private EsService:EmailSettingsService,private UsersService:UsersService,
    private FindingsService:FindingsService) { }

  ngOnInit() {

   this.lsLosses=new Array<Losses>();
   this.LossesService.getLossesList().subscribe(data=>{this.lsLosses=data},err=>{alert('error')});
   this.lsEs=new Array<EmailSettings>();
   this.EsService.getEmailSettingsList().subscribe(data=>{this.lsEs=data},err=>{alert('error')});
   this.lsUsers=new Array<Users>();
   this.UsersService.getUsersList().subscribe(data=>{this.lsUsers=data},err=>{alert('error')});
   this.lsFindings=new Array<Findings>();
   this.FindingsService.getFindingsList().subscribe(data=>{this.lsFindings=data},err=>{alert('error')});
  }

}
