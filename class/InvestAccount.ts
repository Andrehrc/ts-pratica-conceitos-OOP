import { DioAccount } from "./DioAccount";

export class InvestAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (amount:number) => {
        this.validateStatus()
        this.updateBalance(amount + 10);
    }
}