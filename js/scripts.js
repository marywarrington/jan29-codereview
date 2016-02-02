function Pizza(quantity, size, toppings) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = toppings;
  this.price;
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
  this.price = this.quantity * this.pizzaPrice();
  return this.price;
  this.price = price;
}

// Begin UI

$(document).ready(function() {
  $("#addPizza").click(function() {
    $("#originalPizza").append('<div class="newPizza">' +
                                  '<h3>' +
                                  'New Pizza' +
                                  '</h3>' +
                                  '<div class="form-group">' +
                                    '<label for="quantity">Quantity</label>' +
                                    '<select id="quantityInput">' +
                                      '<option value="1">1</option>' +
                                      '<option value="2">2</option>' +
                                      '<option value="3">3</option>' +
                                      '<option value="4">4</option>' +
                                      '<option value="5">5</option>' +
                                      '<option value="6">6</option>' +
                                      '<option value="7">7</option>' +
                                      '<option value="8">8</option>' +
                                      '<option value="9">9</option>' +
                                      '<option value="10">10</option>' +
                                    '</select>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="size">Size</label>' +
                                    '<select id="sizeInput">' +
                                      '<option value="small">small</option>' +
                                      '<option value="medium">medium</option>' +
                                      '<option value="large">large</option>' +
                                    '</select>' +
                                  '</div>' +
                                  '<div class="form-group" id="toppingsInput">' +
                                    '<label for="toppings">Toppings</label>' +
                                    '<div class="checkbox">' +
                                      '<label>' +
                                        '<input type="checkbox" id="hazelnuts" value="hazelnuts">Hazelnuts' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="checkbox">' +
                                      '<label>' +
                                        '<input type="checkbox" id="extracheese" value="extracheese">Extra Cheese' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="checkbox">' +
                                      '<label>' +
                                        '<input type="checkbox" id="sausage" value="sausage">Sausage' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="checkbox">' +
                                      '<label>' +
                                        '<input type="checkbox" id="brussels" value="brussels">Brussels Sprouts' +
                                      '</label>' +
                                    '</div>' +
                                    '<div class="checkbox">' +
                                      '<label>' +
                                        '<input type="checkbox" id="pineapple" value="pineapple">Pineapple' +
                                      '</label>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>');
    });
    $('form#order').submit(function(event) {
      event.preventDefault();

      var quantity = $('select#quantityInput').val();
      var size = $('select#sizeInput').val();
      var toppings = $('input:checkbox[name=toppings]:checked').map(function() {
        return this.value;
      }).get();

      var newPizza = new Pizza(quantity, size, toppings);
      var quantityPrice = newPizza.quantityPrice();

    $("span#totalPrice").text("$" + quantityPrice);
    $('div#results').show();

  });
});
