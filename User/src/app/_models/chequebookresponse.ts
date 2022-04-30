export class ChequebookResponse{
    status:boolean;
    responseMessage:String;
    account:number;

    constructor(status:boolean,responseMessage:string,account:number)
    {
        this.status=status;
        this.responseMessage=responseMessage;
        this.account=account;
    }
}