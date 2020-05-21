//myJavaScript

//Button Element
var buttonGen = document.getElementById("button_gen");
var buttonReset = document.getElementById("button_reset");

//Form Element
var formName = document.getElementById("form_name");
var formKm = document.getElementById("form_km");
var formAge = document.getElementById("form_age");


//Ticket getElementById
var ticketName = document.getElementById("ticket_name");
var ticketRange = document.getElementById("ticket_range")
var ticketPrice = document.getElementById("ticket_price")
var ticketCpCode = document.getElementById("ticket_cpcode")
var ticketWagon = document.getElementById("ticket_wagon")

//Button Generated
buttonGen.addEventListener("click",
  function() {
  if ((formName.value.length == 0) && (formKm.value.length == 0)) {
    formName.value = "Invalid Name & Number";
  }else if (formName.value.length == 0) {
    formName.value = "Invalid Name";
  }else if (formKm.value.length == 0) {
    formName.value = "Invalid Number";
  }else {
    //Price
    var price = parseInt(formKm.value) * 0.21;
    if (formAge.value == "minor") {
      price = price - (price / 100 * 20);
    } else if (formAge.value == "over") {
      price = price - (price / 100 * 40);
    }

    //generate INFO - TICKET
    ticketName.innerHTML = formName.value;

    //ticket range
    ticketRange.innerHTML = formAge.value + " standard price";
    if (formAge.value == "minor") {
      ticketRange.innerHTML = formAge.value + " 20% discount";
    } else if (formAge.value == "over") {
      ticketRange.innerHTML = formAge.value + " 40% discount";
    }

    ticketPrice.innerHTML = price.toFixed(2) + " Euro";
    ticketWagon.innerHTML = Math.floor(Math.random() * 20);
    ticketCpCode.innerHTML = Math.floor(Math.random() * 1000000);

  }
  }
);

//Button Reset
buttonReset.addEventListener("click",
  function() {
    //reset info ticket
  formName.value = "";
  ticketName.innerHTML = "";
  formKm.value = "";
  formAge.value = "minor";
  ticketRange.innerHTML = "";
  ticketPrice.innerHTML = "";
  ticketWagon.innerHTML = "";
  ticketCpCode.innerHTML = "";

  }
);
