//myJavaScript

//elementButton
var buttonGen = document.getElementById("button_gen");
var buttonReset = document.getElementById("button_reset");


//elementInput
var inputName = document.getElementById("input_name");
var inputKm = document.getElementById("input_km");
var inputAge = document.getElementById("input_age");

//elementTicket
var ticketName = document.getElementById("ticket_name");
var ticketRange = document.getElementById("ticket_range");
var ticketPrice = document.getElementById("ticket_price");


//buttonGen
buttonGen.addEventListener("click",
function() {
  //priceCalc
  var km = parseInt(inputKm.value);
  var age = inputAge.value;
  var price = km * 0.21;

  //discountCalc
  var discountMinor = (price / 100 * 20);
  var discountOver = (price / 100 * 40);

  if(age == "minor") {
    price = price - discountMinor;
  }else if (age == "over") {
    price = price - discountOver;
  }

  //input.innerHTML
  ticketName.innerHTML = inputName.value;
  ticketPrice.innerHTML = (price).toFixed(2) + " $"

  //input.innerHTML ticketRange
  if(age == "minor") {
    ticketRange.innerHTML = inputAge.value + " 20% off" + " (" + (discountMinor).toFixed(2) + " $)";
  }else if (age == "over") {
    ticketRange.innerHTML = inputAge.value + " 40% off" + " (" + (discountOver).toFixed(2) + " $)";
  }else {
    ticketRange.innerHTML = inputAge.value + " standard price";
  }

}
);


//ButtonReset
buttonReset.addEventListener("click",
function() {
  //input.value
  inputName.value = "";
  inputKm.value = "";
  inputAge.value = "--";

  //input.innerHTML
  ticketName.innerHTML = "";
  ticketPrice.innerHTML = "";
  ticketRange.innerHTML = "";



}
);
