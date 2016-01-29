
describe('Pizza', function () {
  it("will create an object Pizza with the following properties", function() {
    var newPizza = new Pizza(1, 'medium', ["pineapple", "extra cheese", "sausage"]);
    expect(newPizza.quantity).to.equal(1);
    expect(newPizza.size).to.equal('medium');
    expect(newPizza.toppings).to.eql(["pineapple", "extra cheese", "sausage"]);
  });
  it("sets the base price of a pizza at $5", function() {
    var newPizza = new Pizza(1, 'medium', ["pineapple", "extra cheese", "sausage"]);
    expect (newPizza.price()).to.equal(5);
  });
});
