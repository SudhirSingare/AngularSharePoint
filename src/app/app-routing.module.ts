import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { AddusersComponent } from './addusers/addusers.component';

const routes: Routes = [
  {path:"users",component:UsersComponent},
  {path:"home",component:HomeComponent},
  {path:"pricing",component:PricingComponent},
  {path:"features",component:FeaturesComponent},
  {path:"addusers",component:AddusersComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
