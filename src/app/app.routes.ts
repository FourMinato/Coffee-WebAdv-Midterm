import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cool } from './list/cool/cool';
import { Hot } from './list/hot/hot';
import { Smooty } from './list/smooty/smooty';
import { Type } from './type/type';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'type', component: Type, canActivate: [AuthGuard] },
  { path: 'list/cool', component: Cool, canActivate: [AuthGuard] },
  { path: 'list/hot', component: Hot, canActivate: [AuthGuard] },
  { path: 'list/smooty', component: Smooty, canActivate: [AuthGuard] }
];
