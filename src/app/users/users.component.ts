import { Component, OnInit } from '@angular/core';
import { UserOperationsService } from './../user-operations.service';
import { ToastrService } from 'ngx-toastr';
import { UserInformation } from './../user-information';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  UserInformation:UserInformation[];
  IsJoiningDate:string="";
  constructor(private ToastrService:ToastrService, private UserOperationsService:UserOperationsService) { }

  ngOnInit() {
    this.loadUsers();
  }

 public loadUsers(){
    this.UserInformation=[]
    this.IsJoiningDate="";
    this.UserOperationsService.getUserInformation().subscribe(
      (Response)=>{
        Response.forEach(element => {
          this.UserInformation.push(new UserInformation(element.Title,element.Desc,element.Department,element.JoiningDate, +element.Id))
        });
      },
      (err)=>{console.log(err)},
      ()=>{this.ToastrService.info("Users data Loaded")}
    );
  }

  public ondeleteAction(id){

    this.UserOperationsService.DeleteUserInformation(+id).subscribe(
      (Response)=>{
        console.log(Response)
      },
      (err)=>{console.log(err)},
      ()=>{
        this.ToastrService.info("Item deleted :" + id)
        this.loadUsers();
    }
    );

    
  }

}
