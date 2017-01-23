describe("Date", function() {
  var date;

  beforeEach(function() {
    date = new Date();
  });

  it("should have a date", function() {
    expect(date.dateIs('23/01/17')).toEqual('23/01/17');
  });




});
