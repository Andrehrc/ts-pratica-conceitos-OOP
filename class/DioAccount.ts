export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    this.validateStatus();
    this.balance += amount;
    console.log("Deposito efetuado com sucesso!");
  }

  protected updateBalance = (amount: number): void => {
    this.balance += amount;
  }

  withdraw = (amount: number): void => {
    this.validateStatus();

    if (this.validateBalance(amount)) {
      this.balance = this.balance - amount;
      console.log("Saque efetuado com sucesso!")
    }
    else {
      throw new Error('Saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): void => {
    if (!this.status) {
      throw new Error('Conta inválida');
    }
  }

  private validateBalance = (amount: number): boolean => {
    return this.balance > amount;
  }

}
