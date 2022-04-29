export class CheckbookRequest{
    id:number;
    accType: string;
    username: string;
    account: number;
    date: string;
    no_of_pages: number;

    constructor(id:number,accType:string,username:string,account:number,date:string,no_of_pages:number)
    {
        this.id=id;
        this.username=username;
        this.accType=accType;
        this.account=account;
        this.date=date;
        this.no_of_pages=no_of_pages;
    }
}