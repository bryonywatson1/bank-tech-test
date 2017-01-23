function AccountManager() {
    this.balance = 0;
    this.allCredit = [];
    this.allDebit = [];
}
AccountManager.prototype.deposit = function(credit) {
  this.allCredit.push(credit);
  this.balance += credit;
};

AccountManager.prototype.withdraw = function(debit) {
  this.allDebit.push(debit);
  this.balance -= debit;
};

AccountManager.prototype.showBalance = function() {
  return this.balance;
};
