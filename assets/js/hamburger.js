// learned how to do this on. --> https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function hamburgerMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }