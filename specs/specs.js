describe('countUp', function() {
  it("returns a count from 1 to the given number", function() {
    expect(countUp("10")).to.equal("1,2,3,4,5,6,7,8,9,10");
  });
});

describe('multipleOfThree', function () {
  it("returns true if a number is a multiple of 3", function() {
    expect(multipleOfThree("6")).to.equal(true);
  });
  it("returns false if a number is not a multiple of 3", function() {
    expect(multipleOfThree("7")).to.equal(false);
  });
});
