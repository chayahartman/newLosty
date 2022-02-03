import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { SearchComponent } from './search/search.component';
import { SaveForRequestComponent } from './save-for-request/save-for-request.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { FinderRequestComponent } from './finder-request/finder-request.component';
import { LoserRequestComponent } from './loser-request/loser-request.component';
import { GetCountUsersComponent } from './get-count-users/get-count-users.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersService } from 'src/Services/users-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DateComponent } from './date/date.component';
//import { NgxPageScrollModule } from 'ngx-page-scroll-core';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsService } from 'src/Services/items.service';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewItemsComponent,
    SearchLocationComponent,
    SearchComponent,
    SaveForRequestComponent,
    MyItemsComponent,
    MyRequestsComponent,
    ProfileComponent,
    FinderRequestComponent,
    LoserRequestComponent,
    GetCountUsersComponent,
    NavBarComponent,
    DateComponent,
    ScrollBarComponent,
    SignUpComponent,
    SignInComponent,
    PasswordRecoveryComponent,
    AddItemComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule ,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //NgxPageScrollModule
   
  ],
  providers: [UsersService,ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
