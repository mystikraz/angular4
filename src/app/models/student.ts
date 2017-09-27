export class Student{
    // constructor(public firstName:string, public lastName:string){
        
    // }
    private firstName:string;
    private lastName:string;
    constructor(){

    }
    public getFirstName():string{
        return this.firstName;
    }
    public getLastName():string{
        return this.lastName
    }
    public setFirstname(firstName:string):void{
    this.firstName=firstName;
    }
    public setlastName(lastName:string):void{
        this.lastName=lastName;
    }

    public getFullName():string{
        return this.firstName +" "+ this.lastName
    }
}