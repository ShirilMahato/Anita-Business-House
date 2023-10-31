const checkbtnE1 = document.querySelector('.checkbtn-label');

document.addEventListener('DOMContentLoaded', function () {
  const checkBtn = document.getElementById('check');
  const links = document.querySelector('.links');

  checkBtn.addEventListener('change', function () {
    if (this.checked) {
      links.style.left = '0';
    } else {
      links.style.left = '-100%';
    }
  });

  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');

  let lengthItems = items.length - 1;
  let active = 0;
  next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  }
  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  }
  let refreshInterval = setInterval(() => { next.click() }, 3000);
  function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);
  }

  dots.forEach((li, key) => {
    li.addEventListener('click', () => {
      active = key;
      reloadSlider();
    })
  });
  window.onresize = function (event) {
    reloadSlider();
  };
});



var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 2000, 
    disableOnInteraction: false, // Allow autoplay to continue after interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// Pause autoplay on hover
swiper.el.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

// Resume autoplay on mouse leave
swiper.el.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});




