import Account from '../src/Account.js';
import Transaction from '../src/Transaction.js';
import Printer from '../src/Printer.js';

describe('Transaction', () => {
    describe('Transaction', () => {
        let testTransaction1;
        let testTransaction2;
        let actualResult;
        beforeEach(() => {
            testTransaction1 = new Transaction("10/01/2012", 1000, null, 1000);
            testTransaction2 = new Transaction("14/01/2012", null, 500, 2500);
        })
        afterEach(() => {
            testTransaction1 = undefined;
            testTransaction2 = undefined;
            actualResult = undefined;
        })

        // test1 - getDate
        it('test1 - getDate', () => {
            // arrange
            // act
            actualResult = testTransaction1.getDate();
            // assert, expect(actual)
            expect(actualResult).toBe("10/01/2012");
        })

        // test2 - getDeposit
        it('test2 - getDeposit', () => {
            // arrange
            // act
            actualResult = testTransaction1.getDeposit();
            // assert, expect(actual)
            expect(actualResult).toBe(1000);
        })

        // test3 - getWithdrawal
        it('test3 - getWithdrawal', () => {
            // arrange
            // act
            actualResult = testTransaction1.getWithdrawal();
            // assert, expect(actual)
            expect(actualResult).toBe(null);
        })

        // test4 - getBalance
        it('test4 - getBalance', () => {
            // arrange
            // act
            actualResult = testTransaction2.getBalance();
            // assert, expect(actual)
            expect(actualResult).toBe(2500);
        })
    })
})