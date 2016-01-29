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
    var orderPrice = 0;
    var quantity = $('select#quantity').val();
    var size = $('select#size').val();

    var toppings = [];
    toppings.push($('input[name=toppings]:checked').val());

    function checkboxes() {
      var checkboxes = $('input[name=toppings]:checked');
      var checkboxesValue = [];
      $(checkboxes).each(function() {
        checkboxesValue.push(value);
      });
      var str = checkboxesValue.join(",");
    }

    var newPizza = new Pizza(quantity, size, toppings);
    var pizzaPrice = newPizza.quantityPrice();

    var pizzaOrder = [];
    pizzaOrder.push(newPizza);

    pizzaOrder.forEach(function(pizza) {
      $('ul#pizzasOrdered').append('<li>' + newPizza.quantity + ' ' + newPizza.size + ' ' + newPizza.toppings + ' $' + pizzaPrice + '</li>');
      return orderPrice += pizzaPrice;
    });

//     for (var i=0;i<=pizzaOrder.length;i++) {
// //
//       orderPrice += $(pizzaOrder[i];
//
//       return orderPrice;
//     };

    $("span#totalPrice").text("$" + orderPrice);
    $('div#results').show();

    event.preventDefault();
  });
});


// $(".newAddress").each(function() {
//    var inputtedStreet = $(this).find("input.street").val();
//    var inputtedCity = $(this).find("input.city").val();
//    var inputtedState = $(this).find("input.state").val();
//    var completeAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
//    newContact.address.push(completeAddress.fullAddress());



    // var toppingsArray = [];
    // var toppingsInArray = toppingsArray.push(this.toppings);

//add together all pizza prices
//display total price
