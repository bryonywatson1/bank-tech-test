function Debit() {
    this.amount = 0;
}
Debit.prototype.addDebit = function(number) {
  this.amount += number;
};

Debit.prototype.addADate = function(date){
  this.timeStamp = date;
};
