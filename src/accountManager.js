function AccountManager() {
    this.balance = 0;
    this.allCredit = [];
    this.allDebit = [];
    this.allDates = [];
}
AccountManager.prototype.deposit = function(credit, number, date) {
  this.allCredit.push(credit);
  this.allDates.push(date);
  credit.addCredit(number);
  date.addDateToCredit(credit);
  this.balance += credit.amount;
};

AccountManager.prototype.withdraw = function(debit, number, date) {
  this.allDebit.push(debit);
  this.allDates.push(date);
  debit.addDebit(number);
  date.addDateToDebit(debit);
  this.balance -= debit.amount;
};

AccountManager.prototype.showBalance = function() {
  return this.balance;
};

AccountManager.prototype.printStatement = function() {
  for (date = 0; date < this.allDates.length; date++) {
}

};
