describe("Date", function() {
  var date;

  beforeEach(function() {
    date = new Date();
    credit= jasmine.createSpyObj('credit',['addADate']);
    debit = jasmine.createSpyObj('debit',['addADate']);
  });

  it("should have a date", function() {
    date.dateIs('23/01/17')
    expect(date.value).toEqual('23/01/17');
  });


  describe('credit', function() {
    it('credit should respond with add a date', function(){
      date.addDateToCredit(credit)
      expect(credit.addADate).toHaveBeenCalledWith(date);
    });
  });

  describe('debit', function() {
    it('debit should respond with add a date', function(){
      date.addDateToCredit(debit)
      expect(debit.addADate).toHaveBeenCalledWith(date);
    });
  });

});
