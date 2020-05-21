//myJavaScript

//Button Element
var buttonGen = document.getElementById("button_gen");
var buttonReset = document.getElementById("button_reset");

//Form Element
var formName = document.getElementById("form_name");
var formAge = document.getElementById("form_age");


//Ticket getElementById
var ticketName = document.getElementById("ticket_name");
var ticketRange = document.getElementById("ticket_range")

//Button Generated
buttonGen.addEventListener("click",
  function() {
  //generate info ticket
  ticketName.innerHTML = formName.value;
  ticketRange.innerHTML = formAge.value;
  console.log(formAge)
  }
);

//Button Reset
buttonReset.addEventListener("click",
  function() {
    //reset info ticket
  formName.value = "";
  ticketName.innerHTML = "";
  formRange.value = "";
  ticketRange.innerHTML = "";

  }
);
