// learned how to do this on. --> https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// the function below is an onclick function
function hamburgerMenu() {
  // ad variable for navigation bar links
  var x = document.getElementById("links");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
