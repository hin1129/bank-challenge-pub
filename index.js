// main program to run
import Account from "./src/Account.js";
import Transaction from "./src/Transaction.js";
import Printer from "./src/Printer.js";

const myAccount = new Account();
myAccount.depositAmount("10/01/2012", 1000)
myAccount.depositAmount("13/01/2012", 2000)
myAccount.withdrawalAmount("14/01/2012", 500)

console.log(Printer.print(myAccount));