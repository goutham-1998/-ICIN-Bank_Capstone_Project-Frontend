export class Transaction{

    date:Date;
    id:number;
    action:String;
    amount:number;

    constructor(date:Date,id:number,action:string,amount:number)
    {
        this.date= date;
        this.id=id;
        this.action=action;
        this.amount=amount;
    }
}