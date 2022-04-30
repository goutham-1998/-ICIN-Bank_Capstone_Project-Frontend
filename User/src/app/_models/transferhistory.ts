export class TransferHistory{
    id:number;
    saccount:string;
    raccount:string;
    amount:number;
    date:Date;
    constructor(id:number,
        saccount:string,
        raccount:string,
        amount:number,
        date:Date)
    {

        this.id=id;
        this.raccount=raccount;
        this.saccount=saccount;
        this.amount=amount;
        this.date=date;

    }
}