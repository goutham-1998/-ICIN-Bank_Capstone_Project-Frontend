export class UserData{
    fname:string;
    lname: string;
    username: string;
    email: string;
    account: number;
    saccount: number;

    constructor(fname:string,lname:string,username:string,email:string,account:number,saccount:number)
    {
        this.fname=fname;
        this.lname=lname;
        this.username=username;
        this.email=email;
        this.account=account;
        this.saccount=saccount;
    }

}