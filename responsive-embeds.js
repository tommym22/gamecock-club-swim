// Responsive embeds script for Gamecock Club Swimming website

// Function to handle Google Calendar embed responsiveness
function setCalendarIframeSource() {
    const calendarContainer = document.getElementById('calendar-container');
    
    // Only proceed if the calendar container exists on the current page
    if (calendarContainer) {
      const iframe = document.createElement('iframe');
      
      // Set common attributes
      iframe.width = '100%';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      
      // Set responsive attributes based on screen size
      if (window.innerWidth < 768) {
        // Mobile view - use agenda mode which is more compact
        iframe.src = "https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FNew_York&showCalendars=0&showTz=0&mode=AGENDA&title=Gamecock%20Club%20Swim%20Schedule&src=Z2FtZWNvY2tjbHVic3dpbW1pbmdAZ21haWwuY29t&color=%23A79B8E";
        iframe.height = '400';
      } else {
        // Desktop view - use month view (default)
        iframe.src = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showCalendars=0&showTz=0&title=Gamecock%20Club%20Swim%20Schedule&src=Z2FtZWNvY2tjbHVic3dpbW1pbmdAZ21haWwuY29t&color=%23A79B8E";
        iframe.height = '600';
      }
      
      // Clear the container and add the iframe
      calendarContainer.innerHTML = '';
      calendarContainer.appendChild(iframe);
    }
  }
  
  // Function to adjust Instagram embed container sizing
  function adjustInstagramEmbed() {
    const instagramContainer = document.querySelector('.instagram-embed');
    
    // Only proceed if the Instagram container exists on the current page
    if (instagramContainer) {
      if (window.innerWidth < 768) {
        // On mobile, make it fill most of the width with smaller margins
        instagramContainer.style.maxWidth = '100%';
        instagramContainer.style.margin = '0 auto 20px auto';
      } else {
        // On desktop, limit width and center it with larger margins
        instagramContainer.style.maxWidth = '540px';  
        instagramContainer.style.margin = '0 auto 40px auto';
      }
    }
  }
  
  // Function to handle all responsive embeds
  function handleResponsiveEmbeds() {
    setCalendarIframeSource();
    adjustInstagramEmbed();
  }
  
  // Initialize embeds when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', handleResponsiveEmbeds);
  
  // Update embeds on window resize with debounce to improve performance
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResponsiveEmbeds, 250);
  });