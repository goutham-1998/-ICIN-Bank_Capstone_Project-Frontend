export class SavingAccount{
    id:number;
    accno:number;
    balance:number;
    username:String;
    user:null;

    constructor(id:number,accno:number,balance:number,username:string,user:null)
    {
        this.id=id;
        this.accno=accno;
        this.balance=balance;
        this.username=username;
        this.user=user;

    }
}