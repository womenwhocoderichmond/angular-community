import { Person } from "app/shared/person.model";

export class Community {
    //public leader: Person;
    public leaderId: number;
    public isCurrentUserMember:boolean = false;
    public isSelected:boolean = false;
    constructor(public id:number,public  name:string, public details?:string){
    }
}