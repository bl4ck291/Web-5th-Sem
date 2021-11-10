window.addEventListener("load", function(event) {
  var url = window.location.href;
  var navLinks = document.getElementsByClassName("header__button");
  for (var i = 0; i < navLinks.length; i++) {
    var lb = navLinks[i].href;
    if (lb == url) {
      navLinks[i].className = "header__button header__button__active";
    }
  }
});
