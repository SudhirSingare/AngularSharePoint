import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserOperationsService } from '../user-operations.service';
import { UserInformation } from './../user-information';
import { DateTimeColumn } from '@microsoft/microsoft-graph-types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  UserName:string='';
  Desc:string='';
  Department:string='';
  JoiningDate:Date=null;
  constructor(private ToastrService:ToastrService, private UserOperationsService:UserOperationsService) { 
  }
  ngOnInit() {

  }
  public onSave() {
    this.UserOperationsService.
      AddUserInformation(new UserInformation(this.UserName, this.Desc,this.Department,this.JoiningDate)).
      subscribe(
        (Response) => {
          console.log(Response);
        },
        (err) => { console.log(err) },
        () => {
          this.ToastrService.info("User added")
          this.UserName = "";
          this.Desc = "";
          this.Department = '';
          this.JoiningDate=null;
        }
      );
  }

}
