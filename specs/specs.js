describe('countUp', function() {
  it("returns a count from 1 to the given number", function() {
    expect(countUp("10")).to.equal("1,2,3,4,5,6,7,8,9,10");
  });
});
