// Responsive Google Calendar script for Gamecock Club Swimming website,
//Built with ClaudeAI

// Function to handle Google Calendar embed responsiveness
function setCalendarIframeSource() {
    const calendarContainer = document.getElementById('calendar-container');
    const instagramEmbed = document.querySelector('.instagram-media');
    
    if (calendarContainer) {
      const iframe = document.createElement('iframe');
      
      // Set common attributes
      iframe.width = '100%';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      
      // Set responsive attributes based on screen size
      if (window.innerWidth < 768) {
        // Mobile view - use agenda mode (better for narrow screens)
        iframe.src = "https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FNew_York&showCalendars=0&showTz=0&mode=AGENDA&title=Gamecock%20Club%20Swim%20Schedule&src=Z2FtZWNvY2tjbHVic3dpbW1pbmdAZ21haWwuY29t&color=%23A79B8E";
      } else {
        // Desktop view - use month view (default)
        iframe.src = "https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FNew_York&showCalendars=0&showTz=0&title=Gamecock%20Club%20Swim%20Schedule&src=Z2FtZWNvY2tjbHVic3dpbW1pbmdAZ21haWwuY29t&color=%23A79B8E";
      }
      
      // Clear the container and add the iframe
      calendarContainer.innerHTML = '';
      calendarContainer.appendChild(iframe);
      
      // Wait for Instagram to load, then match height
      function matchHeight() {
        if (instagramEmbed) {
          const instagramHeight = instagramEmbed.offsetHeight;
          if (instagramHeight > 0) {
            iframe.height = instagramHeight + 'px';
          } else {
            // If Instagram hasn't loaded yet, try again shortly
            setTimeout(matchHeight, 100);
          }
        } else {
          // Default height if Instagram embed isn't found
          iframe.height = '600px';
        }
      }
      
      // Start the height matching process
      matchHeight();
    }
  }
  
  // Initialize calendar when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    setCalendarIframeSource();
    
    // Instagram embeds load asynchronously, so we need to listen for their load
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Listen for Instagram embed script load
      window.addEventListener('load', function() {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          // After processing, match heights again
          setTimeout(setCalendarIframeSource, 1000);
        }
      });
    }
  });
  
  // Update calendar on window resize with debounce
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setCalendarIframeSource, 250);
  });