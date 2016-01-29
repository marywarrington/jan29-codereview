function Pizza(quantity, size, toppings) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var price = 5;
  if (this.size === "medium") {
    return price + 3;
  } else return price;
}
