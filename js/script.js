//myJavaScript

//elementButton
var buttonGen = document.getElementById("button_gen");
var buttonReset = document.getElementById("button_reset");

//showOrHide Ticket
var showHide = document.getElementById("wrapper_ticket");
//showOrHide error
var error = document.getElementById("wrapper_error");

//elementInput
var inputName = document.getElementById("input_name");
var inputKm = document.getElementById("input_km");
var inputAge = document.getElementById("input_age");

//elementTicket
var ticketName = document.getElementById("ticket_name");
var ticketRange = document.getElementById("ticket_range");
var ticketPrice = document.getElementById("ticket_price");
var ticketWagon = document.getElementById("ticket_wagon");
var ticketCpCode = document.getElementById("ticket_cpcode");

//buttonGen
buttonGen.addEventListener("click",
function() {
  //elementInput.value
  var km = parseInt(inputKm.value);
  var age = inputAge.value;

//showOrHide Ticket conditional statements
if ((inputName.value == "") || (inputKm.value == "") || (age == "--") || (km == 0)) {

  //showOrHide ticket
  showHide.className = "wrapper_none"

  //showOrHide error
  error.className = "wrapper_visible"

}else {
  //price Calc
  var price = km * 0.21;

  //discount Calc
  var discountMinor = (price / 100 * 20);
  var discountOver = (price / 100 * 40);

  if (age == "minor") {
    price = price - discountMinor;
  }else if (age == "over") {
    price = price - discountOver;
  }

  //ticketPrice input.inner.HTML
  ticketPrice.innerHTML = (price).toFixed(2) + " $";

  //ticketWagon input.innerHTML
  if (ticketWagon.innerHTML == "") {
    ticketWagon.innerHTML = Math.floor(Math.random() * 20 + 1);
  }

  //input.innerHTML ticketRange
  if (age == "minor") {
    ticketRange.innerHTML = inputAge.value + " 20% off" + " (" + (discountMinor).toFixed(2) + " $)";
  }else if (age == "over") {
    ticketRange.innerHTML = inputAge.value + " 40% off" + " (" + (discountOver).toFixed(2) + " $)";
  }else {
    ticketRange.innerHTML = inputAge.value + " standard price";
  }

  //ticketCpCode.innerHTML
  if (ticketCpCode.innerHTML == "") {
    //CpCode Calc
    var cpDate = new Date();
    var cpYear = cpDate.getFullYear();
    var cpDay = cpDate.getDay();
    var cpName = (inputName.value).substring(0, 1);

    //CpDate.getDay Conversion
    if (cpDay == 0) {
      cpDay = "MON";
    }else if (cpDay == 1) {
      cpDay = "TUE";
    }else if (cpDay == 2) {
      cpDay = "WED";
    }else if (cpDay == 3) {
      cpDay = "THU";
    }else if (cpDay == 4) {
      cpDay = "FRI";
    }else if (cpDay == 5) {
      cpDay = "SAT";
    }else if (cpDay == 6) {
      cpDay = "SUN";
    }

    //input.innerHTML ticketCpCode
    ticketCpCode.innerHTML = "CP" + cpYear + cpDay + Math.floor(Math.random() * 1000) + cpName.toUpperCase();
  }

  //input.innerHTML
  ticketName.innerHTML = inputName.value;

  //showOrHide error
  error.className = "wrapper_none";

  //showOrHide Ticket
  showHide.className = "wrapper_visible";
}
//END showOrHide Ticket conditional statements

}
);

//ButtonReset
buttonReset.addEventListener("click",
function() {
  //showOrHide Ticket
  showHide.className = "wrapper_none"
  //showOrHide error
  error.className = "wrapper_none"

  //input.value
  inputName.value = "";
  inputKm.value = "";
  inputAge.value = "--";

  //input.innerHTML
  ticketName.innerHTML = "";
  ticketPrice.innerHTML = "";
  ticketRange.innerHTML = "";
  ticketWagon.innerHTML = "";
  ticketCpCode.innerHTML = "";

}
);
