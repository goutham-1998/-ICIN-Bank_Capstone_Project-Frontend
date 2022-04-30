export class User {
    firstName: string;
    lastName: string;
    userName:string;
    password: string;
    dob:Date;
    phone: number;
    address:string;
    type:string;
    identity:string;
    email: string;

    constructor(firstName:string,
        lastName:string,
        userName:string,
        password:string,
        dob:Date,
        phone:number,
        address:string,
        type:string,
        identity:string,
        email:string)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.userName=userName;
        this.password=password;
        this.dob=dob;
        this.password=password;
        this.phone=phone;
        this.address=address;
        this.type=type;
        this.identity=identity;
        this.email=email;

    }


    }

export class Login {
    username:string;
    password: string;

    constructor(username:string,password:string)
    {
        this.username=username;
        this.password=password;
    }
    
}