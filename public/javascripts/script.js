var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
var swiper = new Swiper(".multiple-slide-carousel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".multiple-slide-carousel .swiper-button-next",
    prevEl: ".multiple-slide-carousel .swiper-button-prev",
  },
  breakpoints: {
   1440: {
       slidesPerView: 5,
       spaceBetween: 10
   },
   1020: {
       slidesPerView: 4,
       spaceBetween: 20
   },
   768: {
       slidesPerView: 2,
       spaceBetween: 10
   }
 }
});
  // Handle opening the modal and playing video
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video-id');
      const modal = document.getElementById('static-modal');
      const youtubeVideo = document.getElementById('youtube-video');
      youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
      modal.classList.remove('hidden');
    });
  });

  // Handle closing the modal
  document.getElementById('close-modal').addEventListener('click', function () {
    const modal = document.getElementById('static-modal');
    const youtubeVideo = document.getElementById('youtube-video');
    youtubeVideo.src = '';
    modal.classList.add('hidden');
  });

  document.getElementById('close-modal-footer').addEventListener('click', function () {
    const modal = document.getElementById('static-modal');
    const youtubeVideo = document.getElementById('youtube-video');
    youtubeVideo.src = '';
    modal.classList.add('hidden');
  });


  
  