/*Check Settings for a User Settings Box*/
var hasBeenClicked = true;

$("#set-box").click(function () {
  if (hasBeenClicked) {
    hasBeenClicked = false;
    document.getElementById("set-cont").style.top = "0";
    document.getElementById("bar").style.zIndex = "10000";
    document.getElementById("bar").style.position = "fixed";
    document.getElementById("set-cont").style.height = "190%";
  } else {
    hasBeenClicked = true;
    document.getElementById("bar").style.zIndex = "10";
    document.getElementById("set-cont").style.height = "0";
  }
});
