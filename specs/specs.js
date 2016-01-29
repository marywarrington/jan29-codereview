
describe('Pizza', function () {
  it("will create an object Pizza with the following properties", function() {
    var newPizza = new Pizza('Quantity', 'Size', 'Toppings');
     expect(newPizza.quantity).to.equal('Quantity');
     expect(newPizza.size).to.equal('Size');
     expect(newPizza.toppings).to.equal('Toppings');
  });
});
