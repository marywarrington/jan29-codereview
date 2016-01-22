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

describe('countUpFive', function() {
  it("returns a count from 1 to the given number by 5", function() {
    expect(countUpFive("15")).to.equal("5,10,15");
  });
});

describe('countUpFifteen', function() {
  it("returns a count from 1 to the given number by 15", function() {
    expect(countUpFifteen("45")).to.equal("15,30,45");
  });
});

describe('multipleOfThree', function () {
  it("returns the string 'ping' if a number is a multiple of 3", function() {
    expect(multipleOfThree("6")).to.equal("ping");
  });
  it("returns the user input if a number is not a multiple of 3", function() {
    expect(multipleOfFive("13")).to.equal("13");
  });
});

describe('multipleOfFive', function () {
  it("returns the string 'pong' if a number is a multiple of 5", function() {
    expect(multipleOfFive("10")).to.equal("pong");
  });
  it("returns the user input if a number is not a multiple of 5", function() {
    expect(multipleOfFive("13")).to.equal("13");
  });
});

describe('multipleOfFifteen', function () {
  it("returns the string 'pingpong' if the number is a multiple of 15", function() {
    expect(multipleOfFifteen("30")).to.equal("pingpong");
  });
  it("returns the user input if the number is not a multiple of 15", function() {
    expect(multipleOfFifteen("31")).to.equal("31");
  });
});

describe('numberReplacer', function() {
  it("will replace a single instance of a 3 with 'ping''", function() {
    expect(numberReplacer("5")).to.equal("1, 2, ping, 4, 5");
  });
  it("will replace multiples of 3 with 'ping''", function() {
    expect(numberReplacer("6")).to.equal("1, 2, ping, 4, 5, ping");
  });
});
