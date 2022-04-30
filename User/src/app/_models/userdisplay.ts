export class UserDisplay{

    primaryAccno:number;
    savingsAccno:number;
    primaryBalance:number;
    savingsBalance:number;
    constructor(primaryAccno:number,
        savingsAccno:number,
        primaryBalance:number,
        savingsBalance:number)
        {

            this.primaryAccno=primaryAccno;
            this.savingsAccno=savingsAccno;
            this.primaryBalance=primaryBalance;
            this.savingsBalance=savingsBalance;
        }

}