import { Component, OnInit } from '@angular/core';
import { LossesService } from 'src/Services/losses.service';
import { Losses } from 'src/classes/Losses';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lsLosses:Array<Losses>=new Array<Losses>();
  constructor(private LossesService:LossesService) { }

  ngOnInit() {

   this.lsLosses=new Array<Losses>();
   this.LossesService.getLossesList().subscribe(data=>{this.lsLosses=data},err=>{alert('error')});
  }

}
