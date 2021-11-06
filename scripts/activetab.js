window.addEventListener("DOMContentLoaded", function(event) {
  var url = document.location.pathname.split("/");
  var navLinks = document.getElementsByClassName("header__button");
  var currentPage = url[url.length - 1];
  for (var i = 0; i < navLinks.length; i++) {
    var lb = navLinks[i].href.split("/");
    if (lb[lb.length - 1] == currentPage) {
      navLinks[i].className = "header__button header__button__active";
    }
  }
});
