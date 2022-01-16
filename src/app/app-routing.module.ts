import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinderRequestComponent } from './finder-request/finder-request.component';
import { HomeComponent } from './home/home.component';
import { LoserRequestComponent } from './loser-request/loser-request.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { ProfilComponent } from './profil/profil.component';
import { SaveForRequestComponent } from './save-for-request/save-for-request.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { SearchComponent } from './search/search.component';
import { ViewItemsComponent } from './view-items/view-items.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent  },
  { path: 'myItems', component:MyItemsComponent  },
  { path: 'searchLocation', component:SearchLocationComponent  },
  { path: 'search', component:SearchComponent  } ,
  { path: 'sr', component:SaveForRequestComponent  }  ,
  { path: 'profil', component:ProfilComponent  } ,
  { path: 'viewItems', component:ViewItemsComponent}, 
  { path: 'loserR', component:LoserRequestComponent},      
  { path: 'finderR', component:FinderRequestComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
