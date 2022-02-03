import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/Services/items.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  lstr:Array<String>=new Array<String>();
  constructor(private itemsService:ItemsService) { 
  

  }

  ngOnInit() {
   
   this.itemsService.getCountItems().subscribe(data=>{this.lstr=data},err=>{alert('error')});
   
  }

}
