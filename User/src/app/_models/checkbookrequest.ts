export class CheckBookRequest{
   
    accNo:string;
    pages:string;

    constructor(accNo:string,pages:string)
    {
        this.accNo=accNo;
        this.pages=pages;
    }

     
 }