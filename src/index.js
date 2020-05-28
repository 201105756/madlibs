//Brings user to the next screen.
var pn, n1, n2, con, v;
function Submit() {
  //Logs the text inputted by the user.
  pn = document.getElementById("pn").value;
  n1 = document.getElementById("n1").value;
  n2 = document.getElementById("n2").value;
  con = document.getElementById("con").value;
  v = document.getElementById("v").value;

  //Shows the enitre text with the variables.
  document.getElementById("textbox").value =
    "Debugging is one of the worst " +
    pn +
    " a programmer has to do. " +
    "If something is wrong in the  " +
    n1 +
    ", then the program doesn't work. A programmer needs to go back into the " +
    n1 +
    " to find whatever " +
    n2 +
    " is causing the error. This " +
    con +
    " took a lot of time to debug. " +
    v +
    " the code is tedious and sometimes really annoying. This HTML project took all of my sanity.";

  document.getElementById("outcome").style.display = "block";
  document.getElementById("fill").style.display = "none";
}

function Reset() {
  document.getElementById("outcome").style.display = "none";
  document.getElementById("fill").style.display = "block";
}

document.getElementById("subButton").addEventListener("click", Submit);
document.getElementById("resetButton").addEventListener("click", Reset);
