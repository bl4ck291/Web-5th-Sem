window.addEventListener("load", function(event) {
  var url = document.location.pathname.split("/");
  var navLinks = document.getElementsByClassName("header__button");
  var currentPage = url[url.length - 1];
  console.log(navLinks.length);
  for(var i = 0; i < navLinks.length; i++) {
    var lb = navLinks[i].href.split("/");
    console.log(lb[lb.length - 1])
    if(lb[lb.length - 1] == currentPage) {
      navLinks[i].className = "header__button header__button__active";
    }
  }
});
