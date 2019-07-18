var navLi = document.querySelectorAll('.item');

//create click event for nav items
navLi.forEach((navItem) => {
  navItem.querySelector('a').addEventListener('click', activeNav);
});

//add and remove 'active' class from nav item
function activeNav(e) {
  var activeLinks = document.querySelectorAll(".active");
  var clickedLink = e.target;
  activeLinks.forEach((activeLink) => {
    activeLink.classList.remove('active');
  });

  clickedLink.parentElement.classList.add('active');
}

//Scroll back to top button
$(document).ready(() => {

    //Check to see if the window is top if not then display button
    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

//Scrolling anchors
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
