import Transaction from "./Transaction.js";
import Printer from "./Printer.js";

class Account {
    #balance;
    #transactionHistory;
    constructor() {
        this.#balance = 0;
        this.#transactionHistory = [];
    }

    // return array
    getTransactionHistory() { return this.#transactionHistory; }

    // return total balance of account
    getBalance() { return this.#balance; }

    // add money to account
    depositAmount = (date, deposit) => {
        if (deposit > 0 && typeof deposit === 'number') {
            this.#balance = this.#balance + deposit;
            const newTransaction = new Transaction(date, deposit.toFixed(2), "      ", this.#balance.toFixed(2));
            this.#transactionHistory.push(newTransaction);
            // //display new instance
            // console.log(newTransaction.getDate());
            // console.log(newTransaction.getDeposit());
            // console.log(newTransaction.getWithdrawal());
            // console.log(newTransaction.getBalance());
        }
        else { console.log("value cant be 0 or less, or non-int") }
    }

    // remove money from account
    withdrawalAmount = (date, withdrawal) => {
        if (withdrawal > 0 && typeof withdrawal === 'number' && this.#balance >= withdrawal) {
            this.#balance = this.#balance - withdrawal;
            const newTransaction = new Transaction(date, "       ", withdrawal.toFixed(2), this.#balance.toFixed(2));
            this.#transactionHistory.push(newTransaction);
            // //display new instance
            // console.log(newTransaction.getDate());
            // console.log(newTransaction.getDeposit());
            // console.log(newTransaction.getWithdrawal());
            // console.log(newTransaction.getBalance());
        }
        else { { console.log("value cant be 0 or less, or non-int, or withdrawal more than account balance") } }
    }
}

export default Account;