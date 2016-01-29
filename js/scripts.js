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

function Order() {
  this.pizza = new Pizza();
}

Order.prototype.orderPrice = function() {
  return Pizza.quantityPrice.
}

$(document).ready(function() {
})
