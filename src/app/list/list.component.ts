import { Component, OnInit } from '@angular/core';
import { LossesService } from 'src/Services/losses.service';
import { Losses } from 'src/classes/Losses';
import { EmailSettings } from 'src/classes/EmailSettings';
import { EmailSettingsService } from 'src/Services/email-settings.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lsLosses:Array<Losses>=new Array<Losses>();
  lsEs:Array<EmailSettings>=new Array<EmailSettings>();
  constructor(private LossesService:LossesService,private EsService:EmailSettingsService) { }

  ngOnInit() {

   this.lsLosses=new Array<Losses>();
   this.LossesService.getLossesList().subscribe(data=>{this.lsLosses=data},err=>{alert('error')});
   this.lsEs=new Array<EmailSettings>();
   this.EsService.getEmailSettingsList().subscribe(data=>{this.lsEs=data},err=>{alert('error')});
  }

}
