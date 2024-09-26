// Intro

let intro = document.querySelector(".intro");
let introLogo = document.querySelector(".introLogo");
let logoSpan = document.querySelectorAll(".logo-letter");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (span + 1) * 100);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

/* Animated Nav Bar */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// NARRATIVE 

const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const clickableImage = document.querySelector(".clickable-image");
const closeModal = document.querySelector(".close");

// Open narrative modal on image click
clickableImage.addEventListener("click", (event) => {
    event.preventDefault(); 
    imageModal.style.display = "flex"; 
    modalImage.src = clickableImage.src; 
    modalImage.style.transform = "scale(1.5)"; // Enlarge when opened
});

// Function to close narrative modal
function closeNarrativeModal() {
    imageModal.style.display = "none"; 
    modalImage.style.transform = "scale(1)"; 
}

// Close modal on clicking the close button
closeModal.addEventListener("click", closeNarrativeModal);

// Close modal when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        closeNarrativeModal();
    }
});

// Add click event to each narrative item
const narratives = document.querySelectorAll('.narrative');
narratives.forEach(narrative => {
    narrative.addEventListener('click', () => {
        const url = narrative.getAttribute('data-url');
        window.open(url, '_blank'); // Open the URL in a new tab/window
    });
});


// GALLERY MODAL

// Ensure gallery modal is hidden on page load
window.addEventListener('DOMContentLoaded', () => {
  var galleryModal = document.getElementById("galleryModal");
  var imageModal = document.getElementById("image-modal");

  // Ensure both modals are hidden
  galleryModal.style.display = "none";
  imageModal.style.display = "none";
});

// GALLERY MODAL

// Function to open the gallery modal
function openGalleryModal(img) {
  var modal = document.getElementById("galleryModal");
  var modalImg = document.getElementById("galleryModalImage");

  modal.style.display = "flex"; // Only open the gallery modal
  modalImg.src = img.src;
}

// Function to close the gallery modal
function closeGalleryModal() {
  var modal = document.getElementById("galleryModal");
  modal.style.display = "none"; // Close the gallery modal
}

// Close the gallery modal when clicking outside the image
window.addEventListener("click", (event) => {
  var galleryModal = document.getElementById("galleryModal");
  if (event.target === galleryModal) {
      closeGalleryModal();
  }
});


// SCROLLBAR

// Hide scrollbar for the first 2 seconds after the page loads
window.addEventListener('DOMContentLoaded', () => {
  // Add the class to the body to hide the scrollbar
  document.body.classList.add('hide-scrollbar');

  // After 2 seconds, transition to show scrollbar smoothly
  setTimeout(() => {
    document.body.classList.remove('hide-scrollbar'); // Remove the hidden scrollbar class
    document.body.classList.add('show-scrollbar'); // Add smooth transition for scrollbar

    // After the transition ends, make overflow visible
    setTimeout(() => {
      document.body.classList.add('overflow-visible'); // Show the scrollbar smoothly
    }, 500); // Time should match the CSS transition duration (0.5s)
  }, 6000); // 2000 milliseconds = 2 seconds
});


// BARK

// JavaScript to handle image transitions
setTimeout(() => {
  const izumistands = document.getElementById('izumistands'); // Fixed ID here
  const izumibarks = document.getElementById('izumibarks'); // Fixed ID here

  // Hide the first image
  izumistands.classList.add('barkhidden');

  // Show the second image immediately after the first starts hiding
  setTimeout(() => {
      izumibarks.classList.remove('barkhidden'); // Show the second image
  }, 1); // Show the second image after 0.5 seconds of fading out

  // Hide the second image after 1 second (this will last 1 second)
  setTimeout(() => {
      izumibarks.classList.add('barkhidden'); // Start fading out the second image

      // Remove both images from the DOM after hiding
      setTimeout(() => {
          izumistands.remove();
          izumibarks.remove();
      }, 1000); // Allow 1 second for fading out before removal
  }, 2000); // Total time to show the second image (after showing it)
}, 5500); // Duration before switching to the second image