import { BsDatepickerModule} from "ngx-bootstrap"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UserOperationsService } from './user-operations.service';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    AddusersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UserOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
