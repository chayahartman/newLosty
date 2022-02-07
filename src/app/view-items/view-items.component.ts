import { Component, OnInit } from '@angular/core';
import { Items } from 'src/classes/Items';
import { ItemsService } from 'src/Services/items.service';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

lstr:Array<Items>=new Array<Items>();
item:Items =new Items(-1);

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
add()
{
  this.itemsService.add(this.item).subscribe(data=>{this.lstr=data},err=>{alert('error')});
}
 

}
