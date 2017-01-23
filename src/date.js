function Date() {
}

Date.prototype.addDateToCredit = function(credit) {
  credit.addsADate(this);
};

Date.prototype.addDateToDebit = function(debit) {
  debit.addsADate(this);
}

Date.prototype.dateIs = function(today) {
  return today;
}
