import { Person } from "app/shared/person.model";

export class Community {
    public leader: Person;
    constructor(public id:number,public  name:string, public details?:string){
    }
}