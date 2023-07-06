import Account from "./Account.js";
import Printer from "./Printer.js";

class Transaction {
    #date;
    #deposit;
    #withdrawal;
    #balance;

    constructor(date, deposit, withdrawal, balance) {
        this.#date = date;
        this.#deposit = deposit;
        this.#withdrawal = withdrawal;
        this.#balance = balance;
    }

    // date object
    // constructor(deposit, withdrawal, balance) {
    //     this.#date = new Date().toLocaleDateString();
    //     this.#deposit = deposit;
    //     this.#withdrawal = withdrawal;
    //     this.#balance = balance;
    // }

    // getters
    getDate() { return this.#date; }
    getDeposit() { return this.#deposit; }
    getWithdrawal() { return this.#withdrawal; }
    getBalance() { return this.#balance; }
}

export default Transaction;