// Navgiation Drop Down Menu
$(document).ready(function() {

  var logo = $('.logo__image');


  // Fly in menu
  logo.click(function() {

    var arrow = $('.logo__arrow');

    arrow.toggleClass("logo__arrow-open");
    ghostLinks.toggle(display);
    ghostHelp.toggle(display);


  });

  // Hide full-width menu links

  //Submenu active link
});
