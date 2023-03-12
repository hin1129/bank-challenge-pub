import Account from '../src/Account.js';
import Transaction from '../src/Transaction.js';
import Printer from '../src/Printer.js';

describe('Printer Class', () => {
    describe('Test', () => {
        let testAccount;
        let actualResult;
        let testSpy;
        beforeEach(() => {
            testAccount = new Account();
        })
        afterEach(() => {
            testAccount = undefined;
            actualResult = undefined;
            testSpy = undefined;
        })

        it('print - function have been called', () => {
            // test1 -
            // arrange
            testSpy = spyOn(Printer, `print`)
            // act
            testAccount.depositAmount("11/01/2012", 2000);
            Printer.print(testAccount);
            // assert, expect(actual)
            expect(testSpy).toHaveBeenCalled();
        })
    })
})