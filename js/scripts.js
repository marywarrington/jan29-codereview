function Pizza(quantity, size) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = [];
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
  for (var i = 0; i < arguments.length; i++ ) {
  this.toppings.push(arguments[i]);
  }
  return this.toppings.length * 2;
}
