describe("Debit", function() {
  var debit;

  beforeEach(function() {
    debit = new Debit();
    date = jasmine.createSpyObj('date', ['addDate', 'dateIs']);
  });

  it("should have an amount", function() {
    debit.addDebit(100);
    expect(debit.amount).toEqual(100);
  });


    it('should have a date', function() {
      debit.addADate(date)
      expect(debit.timeStamp).toEqual(date);
    })




});
