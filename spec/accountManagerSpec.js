describe("AccountManager", function() {
  var accountManager;

  beforeEach(function() {
    accountManager = new AccountManager();
    credit = jasmine.createSpyObj('credit', ['amount', "addCredit", 'addADate']);
    debit = jasmine.createSpyObj('debit', ['amount', 'addDebit', 'addADate']);
    date = jasmine.createSpyObj('date', ['dateIs', 'addDateToCredit', 'addDateToDebit']);
  });

  it("should be able to deposit an amount", function() {
    var number = 12;
    credit.amount = 12;
    accountManager.deposit(credit, number, date);
    expect(accountManager.balance).toEqual(12);
  });

  it("should be able to withdraw an amount", function() {
    var number = 12;
    debit.amount = 12;
    accountManager.withdraw(debit, number, date);
    expect(accountManager.balance).toEqual(-12);
  });

  it('should be able to show a current balance', function() {
    var number = 12;
    credit.amount = 150;
    accountManager.deposit(credit, number, date);
    expect(accountManager.showBalance()).toEqual(150);
  })

  it('should be able to record all credit', function() {
    var number = 12;
    accountManager.deposit(credit, number, date);
    expect(accountManager.allCredit).toEqual([credit]);
  })

it('should be able to record all debit', function() {
  var number = 12;
  accountManager.withdraw(debit, number, date);
  expect(accountManager.allDebit).toEqual([debit]);
})

it('should be able to record all dates', function() {
  var number = 12;
  accountManager.withdraw(debit, number, date);
  expect(accountManager.allDates).toEqual([date]);
})


it('should be able to display a statement', function() {
  var number = 12;
  credit.amount = 150;
  accountManager.withdraw(debit, number, date);
  expect(accountManager.printStatement()).toEqual(
    ''
  )
})

});
