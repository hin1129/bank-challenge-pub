============================================================
============================================================
Installing
Forked bank-challenge folder from DF to my own GitHub account, then cloned the folder onto my local machine.
On VSC terminal, inside bank-challenge folder, set up the framework with the following commands:
npm init (set up default package.js file and added new a property type, module), npm install --save-dev jasmine (creates node_modules folder and added devDependencies in package file), npx jasmine init (creates spec/support folder and jasmine.json file).
Changed a property: "type": "module" to use import/outport statement for classes.
Added a new property: "start": "node index.js" so that index.js is ran when program starts.
To run program: "node index.js"
To run tests: "npm test"
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Draft
objects = account
constructor = balance, array[transaction instances(date/credit/debit/balance)]
functions = deposit, withdrawal
account1.deposit(123) (each transaction generates transaction object, add to array)

objects = transaction
constructor = date, credit, debit, balance
functions = get date/credit/debit/balance
object {date, credit, debit, balance}

objects = printer
functions = print (for)
account1.printer.print()
print format = /d
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
Domain models
Object  || Property                        || Message          || Output
Account || balance@int                     || deposit(@int)    || @void
Account || transactions@array[transaction] || withdrawal(@int) || @void
Account ||                                 || getTransactionHistory() || @array[transactions]
Account ||                                 || getBalance()            || balance@int
Transaction || date       || getDate()       || @date
Transaction || deposit    || getDeposit()    || @deposit
Transaction || withdrawal || getWithdrawal() || @withdrawal
Transaction || balance    || getBalance()    || @balance
Printer     ||            || static print()  || @array[transaction]

Initial thoughts:
1 = need account/transaction instance
2 = printer class with a static print method
3 = account instance should able to call deposit/withdrawal methods
4 = account should stores array of transaction instances
5 = transaction has methods to get its properties
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Tests
<!-- account.spec.js -->
Test 1 = getBalance - return account balance
Test 2 = depositAmount - create transaction instance, add to account array - check array length
Test 3 = depositAmount - value cant be 0 or less
Test 4 = depositAmount - value cant non-int
Test 5 = depositAmount - check date value of transaction instance in array in account class
Test 6 = depositAmount - check deposit value of transaction instance in array in account class
Test 7 = withdrawalAmount - create transaction instance, add to account array - check array length
Test 8 = withdrawalAmount - value cant be 0 or less
Test 9 = withdrawalAmount - value cant non-int
Test 10 = withdrawalAmount - withdrawal cant be more than balance
Test 11 = withdrawalAmount - check date value of transaction instance in array in account class
Test 12 = withdrawalAmount - check withdrawal value of transaction instance in array in account class
<!-- account.spec.js -->
<!-- transaction.spec.js -->
Test 1 = getDate
Test 2 = getDeposit
Test 3 = getWithdrawal
Test 4 = getBalance
<!-- transaction.spec.js -->
<!-- printer.spec.js -->
Test 1 = print - function have been called
<!-- printer.spec.js -->
///////////////////////////////
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
TDD code
Not sure how to run test from a specific test file.
============================================================
============================================================

------------------------------------------------------
Other
Not sure how to format print table property
------------------------------------------------------


============================================================
============================================================
Feedback
add a .gitignore file to your project and then to include **/node_modules within this.  Storing the dependencies in the project is not good practice and often the project will not work with what is stored there, meaning other repo users have to delete the folder and do an npm install

"better to pass in an instance of transaction" not "created a new instance within their credit/deposit methods"

mock contains the minimum amount of data/functionality needed to pass the test, mock transaction may simply be an object with date and amount keys with suitable test data, rather than an instance of the transaction class
============================================================

============================================================
