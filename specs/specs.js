
describe('Pizza', function () {
  it("will create an object Pizza with the following properties", function() {
    var newPizza = new Pizza(1, 'medium', []);
    expect(newPizza.quantity).to.equal(1);
    expect(newPizza.size).to.equal('medium');
    expect(newPizza.toppings).to.eql([]);
  });
  it("adds $0 for a small pizza", function() {
    var newPizza = new Pizza(1, 'small');
    expect(newPizza.sizePrice()).to.equal(0);
  });
  it("adds $3 for a medium pizza", function() {
    var newPizza = new Pizza(1, 'medium');
    expect(newPizza.sizePrice()).to.equal(3);
  });
  it("adds $5 for a large pizza", function() {
    var newPizza = new Pizza(1, 'large');
    expect(newPizza.sizePrice()).to.equal(5);
  });
  it("returns the number of toppings a user has selected", function() {
    var newPizza = new Pizza(1, 'small', ['sausage', 'pineapple', 'hazelnuts']);
    expect(newPizza.toppingsAdded('sausage', 'pineapple', 'hazelnuts')).to.equal(3);
  });
  // it("adds $2 for one topping added", function() {
  //   var newPizza = new Pizza(1, 'small', 'sausage');
  //   expect(newPizza.toppingsPrice()).to.equal(2);
  // });
  // it("adds $4 for two toppings added", function() {
  //   var newPizza = new Pizza(1, 'small', ['sausage', 'extra cheese', 'brussels sprouts']);
  //   expect(newPizza.toppingsPrice()).to.equal(4);
  // });
});
