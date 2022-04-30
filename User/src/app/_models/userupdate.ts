export class UserUpdate {
    userName:string;
    prevpassword:string;
    password: string;
    phone: number;
    address:string;
    email: string;

    constructor(userName:string,
        prevpassword:string,
        password: string,
        phone: number,
        address:string,
        email: string) {

            this.userName=userName;
            this.prevpassword=prevpassword;
            this.password=password;
            this.phone=phone;
            this.address=address;
            this.email=email;
        
    }
}