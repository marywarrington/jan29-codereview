function Pizza(quantity, size, toppings) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  var sizeAdds = 0;
  if (this.size === "medium") {
    return sizeAdds + 3;
  } else if (this.size === "large") {
    return sizeAdds + 5;
  } else
  return sizeAdds;
}

Pizza.prototype.toppingsPrice = function() {
  return this.toppings.length * 2;
}

Pizza.prototype.pizzaPrice = function() {
  return 5 + this.sizePrice() + this.toppingsPrice();
}

Pizza.prototype.quantityPrice = function() {
  return this.quantity * this.pizzaPrice();
}

// function Order() {
//   this.pizzas = []
//   this.pizza = new Pizza();
//   this.pizza.sizePrice();
//   this.pizza.toppingsPrice();
//   this.pizza.pizzaPrice();
//   this.pizza.quantityPrice();
//
// }
//
// Order.prototype.pizzaArray = function() {
//   this.pizzas.push(this.pizza);
// }
//
// Order.prototype.orderPrice = function() {
//   this.pizza.forEach()
// }



$(document).ready(function() {


})
