window.addEventListener("load", function(event) {
  var url = document.location.pathname;
  var navLinks = document.getElementsByClassName("header__button");
  for (var i = 0; i < navLinks.length; i++) {
    var lb = navLinks[i].href.substring(7);
    if (lb == url) {
      navLinks[i].className = "header__button header__button__active";
    }
  }
});
