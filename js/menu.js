// Navgiation Drop Down Menu
$(document).ready(function() {
  $(".logo__image").click(function() {
    $(".logo__arrow").toggleClass("logo__arrow-open");
    $(".nav__item").toggleClass("nav__item-open");
    $(".navigation").toggleClass("navigation-open");
  });

  //Submenu active link
    $(".submenu__link").click(function() {
      $(this).addClass('active');
    });
});
