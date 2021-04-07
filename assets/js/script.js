// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {
      // Get the "main-nav-mobile" element
      var $target = document.getElementById('main-nav-mobile');

      // Toggle the class on "main-nav"
      $target.classList.toggle('hidden');

      // Update visible path
      this.querySelector(".navbar-burger svg > path:nth-of-type(1)").classList.toggle("invisible");
      this.querySelector(".navbar-burger svg > path:nth-of-type(2)").classList.toggle("invisible");
    });
  });
});
