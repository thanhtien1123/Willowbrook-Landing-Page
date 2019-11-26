//Creating querySelectors
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const navbar = document.querySelectorAll(".navbar ul li");
const homeClass = document.querySelector(".home");
const aboutClass = document.querySelector(".about");
const programsClass = document.querySelector(".programs");
const registerClass = document.querySelector(".register");
const contactClass = document.querySelector(".contact");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const programs = document.querySelector("#programs");
const register = document.querySelector("#register");
const contact = document.querySelector("#contact");

//Highlight section being viewed
function highlight(item, itemClass) {
  item.addEventListener("mouseover", function(e) {
    itemClass.classList.add("highlight");
  })
  item.addEventListener("mouseout", function() {
    itemClass.classList.remove("highlight");
  })
}

highlight(home, homeClass);
highlight(about, aboutClass);
highlight(programs, programsClass);
highlight(register, registerClass);
highlight(contact, contactClass);



//SELECTING TABS INSIDE PROGRAMS SECTION
function selectedItem() {
    //Remove border
    removeBorder();
    //Remove content
    removeShow();
    //Add border to the tab that we just clicked on
    this.classList.add("tab-border");
    //Select the content inside the tab
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //show the content under that tag.
    tabContentItem.classList.toggle("show");
}

//These functions will work with programs section
//Remove border under the tabs
function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

//Remove content under the corresponding tabs
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

//Listen to click and call selectedItem function
tabItems.forEach(item => item.addEventListener("click", selectedItem));



//SMOOTH SCROLL ANIMATION
$(document).ready(function(){
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
