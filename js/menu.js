// Navgiation Drop Down Menu
$(document).ready(function() {
  $(".logo__image").click(function() {
    $(".logo__arrow").toggleClass("logo__arrow-open");
    $(".nav__item").toggleClass("nav__item-open");
  });
});
