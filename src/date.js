function Date() {
}

Date.prototype.addDateToCredit = function(credit) {
  credit.addADate(this);
  this.debitOrCredit = credit;
};

Date.prototype.addDateToDebit = function(debit) {
  debit.addADate(this);
  this.debitOrCredit = debit;
}

Date.prototype.dateIs = function(today) {
  this.value = today;
}
