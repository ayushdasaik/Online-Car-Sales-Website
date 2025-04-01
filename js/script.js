let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Initialize Swiper for vehicles-slider (single instance)
var vehiclesSwiper = new Swiper('.vehicles-slider', {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

function searchVehicles() {
    // Get the search input value
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all vehicle boxes
    let vehicleBoxes = document.querySelectorAll('.vehicles-slider .swiper-slide.box');
    
    // Flag to track if any slides are visible
    let hasVisibleSlides = false;

    // Loop through each vehicle box and filter based on the vehicle name
    vehicleBoxes.forEach(function(box) {
        let vehicleName = box.querySelector('.content h3').textContent.toLowerCase();
        
        if (vehicleName.includes(input)) {
            box.classList.add('swiper-slide-active'); // Ensure active styling
            box.style.display = 'block'; // Show matching slides
            hasVisibleSlides = true;
        } else {
            box.classList.remove('swiper-slide-active'); // Remove active styling
            box.style.display = 'none'; // Hide non-matching slides
        }
    });

    // Update Swiper to recalculate layout
    vehiclesSwiper.update();

    // If no slides are visible, reset to show all
    if (!hasVisibleSlides) {
        vehicleBoxes.forEach(function(box) {
            box.style.display = 'block';
        });
        vehiclesSwiper.update();
    }
}

// Add Enter key support for search (remove duplicate listener)
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchVehicles();
    }
});

// Menu toggle
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Login form toggle
document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
};

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
};

// Header scroll behavior
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

// Home parallax effect
document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
};

// Swiper for featured-slider
var featuredSwiper = new Swiper('.featured-slider', {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Review slider
var reviewSwiper = new Swiper('.review-slider', {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
  },
});
