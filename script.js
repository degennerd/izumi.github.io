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

// Close modal when clicking the modal image again
modalImage.addEventListener("click", () => {
  closeNarrativeModal();
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
  }, 5000); // 2000 milliseconds = 2 seconds
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
}, 4500); // Duration before switching to the second image

// MASSIVE GALLERY

document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  const closeModal = document.querySelector('.close');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = track.children;
    let currentIndex = 0;
    const totalImages = images.length;

    // Create buttons
    const leftBtn = document.createElement('button');
    leftBtn.classList.add('carousel-btn', 'left');
    leftBtn.innerHTML = '&#10094;'; // Left arrow
    const rightBtn = document.createElement('button');
    rightBtn.classList.add('carousel-btn', 'right');
    rightBtn.innerHTML = '&#10095;'; // Right arrow

    carousel.appendChild(leftBtn);
    carousel.appendChild(rightBtn);

    // Function to update the track position
    const updateCarousel = () => {
      // Calculate width with correct margins
      const imageStyle = window.getComputedStyle(images[0]);
      const marginLeft = parseInt(imageStyle.marginLeft, 10);
      const marginRight = parseInt(imageStyle.marginRight, 10);
      const imageWidth = images[0].clientWidth + marginLeft + marginRight; // +20 for margin
      track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    // Move left (no looping)
    leftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= 2; // Decrement by 2 for visible images
        updateCarousel();
      }
    });

    // Move right (no looping)
    rightBtn.addEventListener('click', () => {
      if (currentIndex < totalImages - (window.innerWidth < 768 ? 2 : 4)) {
        currentIndex += 2; // Increment by 2 for visible images
        updateCarousel();
      } else if (currentIndex === totalImages - (window.innerWidth < 768 ? 2 : 4)) {
        // If at the last two images, just ensure it stops at the last available position
        currentIndex = totalImages - (window.innerWidth < 768 ? 2 : 4); // Prevent going beyond the last visible image
        updateCarousel();
      }
    });

    // Add click event to each image to open modal
    Array.from(images).forEach(image => {
      image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src; // Set modal image to clicked image
        captionText.innerHTML = image.alt; // Set caption to alt text
      });
    });

    updateCarousel();
  });

  // Close modal when clicking on close button or anywhere outside the image
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target === modalImage) {
      modal.style.display = 'none';
    }
  });
});
