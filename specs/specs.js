
describe('Pizza', function () {
  it("will create an object Pizza with the following properties", function() {
    var testPizza = new Pizza(1, 'medium', []);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.size).to.equal('medium');
    expect(testPizza.toppings).to.eql([]);
  });
  it("adds $0 for a small pizza", function() {
    var testPizza = new Pizza(1, 'small');
    expect(testPizza.sizePrice()).to.equal(0);
  });
  it("adds $3 for a medium pizza", function() {
    var testPizza = new Pizza(1, 'medium');
    expect(testPizza.sizePrice()).to.equal(3);
  });
  it("adds $5 for a large pizza", function() {
    var testPizza = new Pizza(1, 'large');
    expect(testPizza.sizePrice()).to.equal(5);
  });
  // it("returns the number of toppings a user has selected", function() {
  //   var testPizza = new Pizza(1, 'small', ['sausage', 'pineapple', 'hazelnuts']);
  //   expect(newPizza.toppingsAdded('sausage', 'pineapple', 'hazelnuts', "topping4")).to.equal(4);
  // });
  it("adds $2 for one topping added", function() {
    var testPizza = new Pizza(1, 'small', ['sausage']);
    expect(testPizza.toppingsPrice('sausage')).to.equal(2);
  });
  it("adds $4 for two toppings added", function() {
    var testPizza = new Pizza(1, 'small', ['sausage', 'extra cheese']);
    expect(testPizza.toppingsPrice('sausage', 'extra cheese')).to.equal(4);
  });
  it("adds $6 for three toppings added", function() {
    var testPizza = new Pizza(1, 'small', ['sausage', 'extra cheese', 'pineapple']);
    expect(testPizza.toppingsPrice('sausage', 'extra cheese', 'pineapple')).to.equal(6);
  });
  it("returns the quantity of pizzas ordered", function() {
    var testPizza = new Pizza(5);
    expect(testPizza.quantity).to.equal(5);
  });
  // it("returns the total price of the pizza", function() {
  //   var testPizza = new Pizza(1, 'small', ['sausage']);
  //   expect(testPizza.totalPrice()).to.equal(10);
  // });
});
