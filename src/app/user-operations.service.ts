import { Injectable } from '@angular/core';
import pnp from "sp-pnp-js";
import { from } from 'rxjs';
import { UserInformation } from './user-information';

@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  constructor() { }

  public getConfigInfo() {
    const mySP = pnp.sp.configure({
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    }, "https://emtecincadmin.sharepoint.com/emtec/SPAngularPOC");
    return mySP;
  }

  public getSiteInformation() {
    const data = from(this.getConfigInfo().web.get())
    return data;
  }

  public getListInformation() {
    const data = from(this.getConfigInfo().web.lists.get())
    return data;
  }

  public getUserInformation() {
    const data = from(this.getConfigInfo().web.lists.getByTitle("Users").items.getAll());
    return data;
  }
  public AddUserInformation(UserInformation: UserInformation) {
    const data = from(this.getConfigInfo().web.lists.
      getByTitle("Users").items.
      add({
        "Title": UserInformation.Title,
        "Desc": UserInformation.Desc,
        "Department":UserInformation.Department,
        "JoiningDate":UserInformation.JoiningDate
      })
    );

    return data;
  }
  public DeleteUserInformation(Id: number) {
    const data = from(this.getConfigInfo().web.lists.getByTitle("Users").items.getById(Id).delete());
    return data;
  }

}
