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
  // var toppings = this.toppings;
  // Pizza.toppings.push(selected toppings);
  // for (var i = 0; i < arguments.length; i++ ) {
  // this.toppings.push(arguments[i]);
  // }
  return this.toppings.length * 2;
}

Pizza.prototype.pizzaPrice = function() {
  return 5 + this.sizePrice() + this.toppingsPrice();
}

// Pizza.prototype.quantityPrice = function() {
//   return this.quantity * this.pizzaPrice();
// }

$(document).ready(function() {
//if a topping is selected, add it to the toppings array
})
