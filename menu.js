//dropdown menu for navbar
const menu = document.getElementById('menu');
const dropdown = document.getElementById('dropdown');


menu.addEventListener('click', () => { /**adds active to the class of the menu **/
    menu.classList.toggle('active');
    dropdown.style.display = (dropdown.style.display === 'flex') ? 'none' : 'flex';
});

const navLinks = document.querySelectorAll('.dropdown a'); /**finds whether the current page is the link's address**/
navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
      link.parentElement.classList.add('active');
    }
  });

// smooth slider in education html
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//image carousel (in hobby html)
const images = document.querySelectorAll('.container img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    showImage(currentIndex);
}

//previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to last image
    showImage(currentIndex);
}


document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);

//Automatically switch images every 5 seconds
setInterval(nextImage, 5000);

//default image
showImage(currentIndex);


document.querySelectorAll('.scroll-option').forEach(option => {
  option.addEventListener('click', () => {
      // Find the link inside the clicked scroll-option div and trigger its click event
      const link = option.querySelector('a');
      if (link) {
          link.click(); // This will trigger the navigation to the target link
      }
  });
});