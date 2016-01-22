describe('countUp', function() {
  it("returns a count from 1 to the given number", function() {
    expect(countUp("10")).to.equal("1,2,3,4,5,6,7,8,9,10");
  });
});

describe('countUpThree', function() {
  it("returns a count from 1 to the given number by 3", function() {
    expect(countUpThree("15")).to.equal("3,6,9,12,15");
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

describe('multipleOfFive', function () {
  it("returns true if a number is a multiple of 5", function() {
    expect(multipleOfFive("10")).to.equal(true);
  });
  it("returns false if a number is not a multiple of 5", function() {
    expect(multipleOfFive("11")).to.equal(false);
  });
});

describe('multipleOfFifteen', function () {
  it("returns true if a number is a multiple of 15", function() {
    expect(multipleOfFifteen("30")).to.equal(true);
  });
  it("returns false if a number is not a multiple of 15", function() {
    expect(multipleOfFifteen("31")).to.equal(false);
  });
});

describe('numberReplacer', function() {
  it("will replace a single instance of a 3 with 'ping''", function() {
    expect(numberReplacer("1, 3, 5")).to.equal("1, ping, 5");
  });
  it("will replace multiples of 3 with 'ping''", function() {
    expect(numberReplacer("1, 3, 5, 6")).to.equal("1, ping, 5, ping");
  });
});
