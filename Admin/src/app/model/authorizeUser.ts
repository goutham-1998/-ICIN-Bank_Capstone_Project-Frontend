export class AuthorizeUser{
    fname:string;
    lname: string;
    phone: number;
    address: string;
    pan: string;
    email: string;
    username: string;

    constructor(fname:string,lname:string,phone:number,address:string,pan:string,email:string,username:string)
    {
        this.fname=fname;
        this.lname=lname;
        this.phone=phone;
        this.address=address;
        this.pan=pan;
        this.email=email;
        this.username=username;
    }
}