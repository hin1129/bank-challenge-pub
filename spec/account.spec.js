import Account from '../src/Account.js';
import Transaction from '../src/Transaction.js';
import Printer from '../src/Printer.js';

// test suite - description, function
describe('Account tests -', () => {

    // sub-suites - grouping tests
    describe('Account Class tests -', () => {
        // perform assignment/cleanup before/after each tests
        let testAccount;
        let testAccount1;
        let testAccount2;
        let actualResult;
        let testAccountArray;
        beforeEach(() => {
            testAccount = new Account();
            testAccount1 = new Account();
            testAccount2 = new Account();
        })
        afterEach(() => {
            testAccount = undefined;
            testAccount1 = undefined;
            testAccount2 = undefined;
            actualResult = undefined;
            testAccountArray = undefined;
        })

        /////////////////////////////////////////
        // beginning of tests for account class with private properties
        // structure - (description, test-function) {test}
        /////////////////////////////////////////

        // test1 - getBalance - return account balance
        it('test1 - getBalance - return account balance', () => {
            // arrange
            // act
            actualResult = testAccount.getBalance();
            // assert, expect(actual)
            expect(actualResult).toBe(0);
        })

        // test 2 - depositAmount - create transaction instance, add to account array - check array length
        it('test 2 - depositAmount - create transaction instance, add to account array - check array length', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            // assert, expect(actual)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(2);
        })

        // test 3 - depositAmount - value cant be 0 or less
        it('test 3 - depositAmount - value cant be 0 or less', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.depositAmount("13/01/2012", 0);
            // assert, expect(actual)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(2);
        })

        // test 4 - depositAmount - value cant non-int
        it('test 4 - depositAmount - value cant non-int', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.depositAmount("13/01/2012", null);
            // assert, expect(actual)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(2);
        })

        // test 5 - depositAmount - check date value of transaction instance in array in account class
        it('test 5 - depositAmount - check date value of transaction instance in array in account class', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            // assert, expect(actual)
            testAccountArray = testAccount.getTransactionHistory();
            for (let counter in testAccountArray) {
                actualResult = testAccountArray[counter].getDate();
            }
            expect(actualResult).toBe("10/01/2012");
        })

        // test 6 - depositAmount - check deposit value of transaction instance in array in account class
        it('test 6 - depositAmount - check deposit value of transaction instance in array in account class', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            // assert, expect(actual)
            testAccountArray = testAccount.getTransactionHistory();
            for (let counter in testAccountArray) {
                actualResult = testAccountArray[counter].getDeposit();
            }
            expect(actualResult).toBeCloseTo(1000);
        })

        // test 7 - withdrawalAmount - create transaction instance, add to account array - check array length
        it('test 7 - withdrawalAmount - create transaction instance, add to account array - check array length', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.withdrawalAmount("14/01/2012", 500);
            // assert, expect(actualResult)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(3);
        })

        // test 8 - withdrawalAmount - value cant be 0 or less
        it('test 8 - withdrawalAmount - value cant be 0 or less', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.withdrawalAmount("14/01/2012", -1);
            // assert, expect(actualResult)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(2);
        })

        // test 9 - withdrawalAmount - value cant non-int
        it('test 9 - withdrawalAmount - value cant non-int', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.withdrawalAmount("14/01/2012", 500);
            testAccount.withdrawalAmount("14/01/2012", "null");
            // assert, expect(actualResult)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(3);
        })

        // test 10 - withdrawalAmount - withdrawal cant be more than balance
        it('test 10 - withdrawalAmount - withdrawal cant be more than balance', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.withdrawalAmount("14/01/2012", 500);
            testAccount.withdrawalAmount("14/01/2012", 2501);
            // assert, expect(actualResult)
            actualResult = testAccount.getTransactionHistory().length;
            expect(actualResult).toBe(3);
        })

        // test 11 - withdrawalAmount - check date value of transaction instance in array in account class
        it('test 11 - withdrawalAmount - check date value of transaction instance in array in account class', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.withdrawalAmount("14/01/2012", 500);
            // assert, expect(actualResult)
            testAccountArray = testAccount.getTransactionHistory();
            for (let counter in testAccountArray) {
                actualResult = testAccountArray[counter].getDate();
            }
            expect(actualResult).toBe("14/01/2012");
        })

        // test 12 - withdrawalAmount - check withdrawal value of transaction instance in array in account class
        it('test 12 - withdrawalAmount - check withdrawal value of transaction instance in array in account class ', () => {
            // arrange
            // act
            testAccount.depositAmount("10/01/2012", 1000);
            testAccount.depositAmount("13/01/2012", 2000);
            testAccount.withdrawalAmount("14/01/2012", 500);
            testAccount.withdrawalAmount("14/01/2012", 2501);
            // assert, expect(actualResult)
            testAccountArray = testAccount.getTransactionHistory();
            for (let counter in testAccountArray) {
                actualResult = testAccountArray[counter].getWithdrawal();
            }
            expect(actualResult).toBeCloseTo(500);
        })

        /////////////////////////////////////////
        // end of tests for account class with private properties
        /////////////////////////////////////////
    })
})