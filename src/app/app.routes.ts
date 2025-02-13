import { Routes } from '@angular/router';
import {CalculatriceComponent} from './calculatrice/calculatrice.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FriendsComponent} from './friends/friends.component';
import {FriendComponent} from './friend/friend.component';


export const routes: Routes = [
  {path: 'calculatrice', component: CalculatriceComponent},
  {path: 'home', component: HomeComponent},
  {path:'friends', component: FriendsComponent},
  {path:'friends/:id', component: FriendComponent},
  { path: '',   redirectTo: '/default', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
