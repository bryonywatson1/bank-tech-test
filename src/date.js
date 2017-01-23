function Date() {
}

Date.prototype.addDateToCredit = function(credit) {
  credit.addADate(this);
};

Date.prototype.addDateToDebit = function(debit) {
  debit.addADate(this);
}

Date.prototype.dateIs = function(today) {
  this.value = today;
}
