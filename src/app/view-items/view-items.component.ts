import { Component, OnInit } from '@angular/core';
import { Items } from 'src/classes/Items';
import { ItemsService } from 'src/Services/items.service';


@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  lstr:Array<Items>=new Array<Items>();
  constructor(private itemsService:ItemsService) { 
  
}

  ngOnInit() {
   
    this.lstr=new Array<Items>();
   
   this.itemsService.getItemsList().subscribe(data=>{this.lstr=data},err=>{alert('error')});
   
  }
delete(itemId:number)
{
  this.itemsService.delete(itemId).subscribe(data=>{this.lstr=data},err=>{alert('error')});
}
 

}
