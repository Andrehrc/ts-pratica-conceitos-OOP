import { CompanyAccount } from './class/CompanyAccount'
import { InvestAccount } from './class/InvestAccount';
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount);
peopleAccount.deposit(200);
peopleAccount.withdraw(100);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(500);
companyAccount.withdraw(150);
companyAccount.getBalance();

const investAccount: InvestAccount = new InvestAccount('Andre', 200)
console.log(investAccount)
investAccount.deposit(100);
investAccount.withdraw(100);
investAccount.getBalance();