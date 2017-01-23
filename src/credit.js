function Credit() {
    this.amount = 0;
}
Credit.prototype.addCredit = function(number) {
  this.amount += number;
};

Credit.prototype.addADate = function(date){
  this.timeStamp = date;
};
