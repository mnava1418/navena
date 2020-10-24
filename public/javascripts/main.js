const menuItemSelected = (item) => {
    let menuItems = document.getElementsByClassName('nav-link-selected')

    for(menuItem of menuItems) {
        menuItem.classList.remove('nav-link-selected')
        menuItem.classList.add('nav-link-text')
    }

    item.classList.remove('nav-link-text')
    item.classList.add('nav-link-selected')
}

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.on('click',function(event) {
// On-page links
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  && 
  location.hostname == this.hostname
) {
  // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  // Does a scroll target exist?
  if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top-50
    }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
    });
  }
}
});