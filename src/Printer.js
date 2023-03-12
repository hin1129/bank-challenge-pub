import Account from "./Account.js";
import Transaction from "./Transaction.js";

class Printer {
    // call on printer class
    static print(myAccount) {
        console.log("date", "      ||", "credit", " ||", "debit", " ||", "balance");

        // get array elements by index
        const myTransactionHistoryArray = myAccount.getTransactionHistory().reverse();
        for (let counter in myTransactionHistoryArray) {
            let myDate = myTransactionHistoryArray[counter].getDate();
            let myDeposit = myTransactionHistoryArray[counter].getDeposit();
            let myWithdrawal = myTransactionHistoryArray[counter].getWithdrawal();
            let myBalance = myTransactionHistoryArray[counter].getBalance();
            console.log(`${myDate} || ${myDeposit} || ${myWithdrawal} || ${myBalance}`);
        }
    }
}
export default Printer;