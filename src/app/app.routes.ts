import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cool } from './list/cool/cool';
import { Hot } from './list/hot/hot';
import { Smooty } from './list/smooty/smooty';
import { Type } from './type/type';


export const routes: Routes = [

    { path: '', component: Login },
    { path: 'type', component: Type },
    { path: 'list/cool', component: Cool },
    { path: 'list/hot', component: Hot },
    { path: 'list/smooty', component: Smooty }



];
