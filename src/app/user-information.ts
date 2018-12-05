import { DateTimeColumn } from "@microsoft/microsoft-graph-types";

export class UserInformation {
    constructor(public Title:string,public Desc:string,public Department:string,public JoiningDate:Date,public Id?:number){
        
    }
}
