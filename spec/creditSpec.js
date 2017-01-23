describe("Credit", function() {
  var credit;

  beforeEach(function() {
    credit = new Credit();
    date = jasmine.createSpyObj('date', ['addDate', 'dateIs']);
  });

  it("should have an amount", function() {
    credit.addCredit(100);
    expect(credit.amount).toEqual(100);
  });

  it('should have a date', function() {
    credit.addADate(date)
    expect(credit.timeStamp).toEqual(date);
  })




});
