describe("AccountManager", function() {
  var accountManager;

  beforeEach(function() {
    accountManager = new AccountManager();
    credit = jasmine.createSpyObj('credit', ['']);
    debit = jasmine.createSpyObj('debit', ['']);
  });

  it("should be able to deposit an amount", function() {
    accountManager.deposit(100);
    expect(accountManager.balance).toEqual(100);
  });

  it("should be able to withdraw an amount", function() {
    accountManager.balance = 100;
    accountManager.withdraw(50);
    expect(accountManager.balance).toEqual(50);
  })

  it('should be able to show a current balance', function() {
    accountManager.deposit(150);
    expect(accountManager.showBalance()).toEqual(150);
  })

  it('should be able to record all credit', function() {
    accountManager.deposit(credit);
    expect(accountManager.allCredit).toEqual([credit]);
  })

it('should be able to record all debit', function() {
  accountManager.withdraw(debit);
  expect(accountManager.allDebit).toEqual([debit]);
})



});
