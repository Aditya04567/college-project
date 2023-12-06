
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
        var slideIndex = 0;
showSlides();
 
var messages = ["Announcement 1: Welcome to Our College Website!", "Announcement 2: Upcoming Events - Check the Calendar!", "Announcement 3: Join Our Clubs and Societies!", "Announcement 4: Explore Our Campus Facilities!"];
    var currentIndex = 0;
    var tickerText = document.querySelector(".ticker-text");

    function displayNextMessage() {
      currentIndex = (currentIndex + 1) % messages.length;
      tickerText.textContent = messages[currentIndex];
    }

    setInterval(displayNextMessage, 12000); // Switch message every 12 seconds

    