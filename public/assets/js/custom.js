$(document).ready(function() {

var acc = document.getElementsByClassName("wp-faq-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
});


// career apply form

$(document).ready(function() {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});


// team popup

$(document).ready(function() {
  $('.team-popup-one').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});


$(document).ready(function(){

  var swiper = new Swiper(".testimonial-section .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".testimonial-section .mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".testimonial-section .swiper-button-next",
      prevEl: ".testimonial-section .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  var swiper = new Swiper(".testimonial2-section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".testimonial2-section .swiper-button-next",
      prevEl: ".testimonial2-section .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView:2,
      }
    }
  });


// presentation unoqe slider

var swiper = new Swiper(".unoqe-wrapper .mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".unoqe-wrapper .swiper-button-next",
    prevEl: ".unoqe-wrapper .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView:3,
    }
  }
});



$(".light_and_dark_themes a").click(function(){
  $(this).toggleClass("active");
  $("body").toggleClass("dark");
});


var newClass = window.location.pathname;
newClass = newClass.substring(newClass.lastIndexOf('/')+1);
$('body').addClass(newClass);


jQuery(document).on('click', '.light_and_dark_themes a', function() {
  if( jQuery(this).hasClass('active') ){
    jQuery('.header-contant .logo-content a img').attr('src', '/assets/images/logo-dark.png');
    jQuery('.footer-logo-content a img').attr('src', '/assets/images/footer-logo-dark.png');
  }else{
    jQuery('.header-contant .logo-content a img').attr('src', '/assets/images/logo.png');
    jQuery('.footer-logo-content a img').attr('src', '/assets/images/footer-logo.png');
  }
});





$(window).scroll(function() {
  if ($(this).scrollTop() > 0){  
    $('header.header').addClass("sticky");
  }
  else{
    $('header.header').removeClass("sticky");
  }
});


var $loader = document.querySelector('.loader-section')
window.onload = function() {
  $loader.classList.remove('loader--active')
};
window.onload ('load', function () {
  $loader.classList.add('loader--active')
  window.setTimeout(function () {
    $loader.classList.remove('loader--active')
  }, 5000)
})

  // $(window).load( function() {
  //   setTimeout( function() {
  //   $(".loader-section").addClass('loader--active');
  // }, 1000 );
  //   setTimeout( function() {
  //     $(".loader-section").removeClass('loader--active');
  //   }, 4000 );
  // });




  $(".loader-btn-box .btn-button a").on("click",function(){
    $("span.loader-icon").addClass("active");
    setTimeout(function(){
      $("span.loader-icon").removeClass("active");
    },4000);
  });


  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });





  if ($(window).width() < 768) {
    $('.contact-wrapper.one h4').click(function() {
      $('.contact-wrapper.one ul').slideToggle();
    });

    $('.contact-wrapper.two h4').click(function() {
      $('.contact-wrapper.two ul').slideToggle();
    });

    $('.contact-wrapper.three h4').click(function() {
      $('.contact-wrapper.three ul').slideToggle();
    });
  }


  AOS.init({
    once: true,
  });


});

$(document).ready(function(){

  const lerp = (a, b, n) => (1 - n) * a + n * b;
  const body = document.body;
  const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    }
    else if (e.clientX || e.clientY)  {
      posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return { x : posx, y : posy }
  }

  class Cursor {
    constructor(el) {
      this.DOM = {el: el};
      this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
      this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
      this.bounds = {dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect()};
      this.scale = 1;
      this.opacity = 1;
      this.mousePos = {x:0, y:0};
      this.lastMousePos = {dot: {x:0, y:0}, circle: {x:0, y:0}};
      this.lastScale = 1;

      this.initEvents();
      requestAnimationFrame(() => this.render());
    }
    initEvents() {
      window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
    }
    render() {
      this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width/2, 1);
      this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height/2, 1);
      this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width/2, 0.15);
      this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height/2, 0.15);
      this.lastScale = lerp(this.lastScale, this.scale, 0.15);
      this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
      this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
      requestAnimationFrame(() => this.render());
    }
    enter() {
      this.scale = 1.5;
      this.DOM.dot.style.display = 'none';
    }
    leave() {
      this.scale = 1;
      this.DOM.dot.style.display = '';
    }
  }

  const cursorEl = document.querySelector(".cursor");
  if (cursorEl) {
    new Cursor(cursorEl);
  }

  const categoriesWrapper = document.querySelector('.home2-hero-section .main-home-hero-contant')

  if (categoriesWrapper) {
  categoriesWrapper.addEventListener('mousemove', e => {
    gsap.to('img.hover-img', {
      x: e.x, 
      y: e.y, 
      xPercent: -50, 
      yPercent: -50,
      stagger: .05
    })
  })

  gsap.utils.toArray('.home2-hero-section .home-hero-contant h1 span, .home2-hero-section .home-hero-contant h3 span')
  .forEach(category => {
    let {label} = category.dataset

    category.addEventListener('mouseenter', () => {
      gsap.to(`img[data-image=${label}].hover-img`, {opacity: 1, scale: 1})
      gsap.set(`img[data-image=${label}].hover-img`, {zIndex: 1})
      gsap.set(`p[data-label=${label}]`, {zIndex: 2})
    })

    category.addEventListener('mouseleave', () => {
      gsap.to(`img[data-image=${label}].hover-img`, {opacity: 0, zIndex: -1, scale: .80})
      gsap.set(`p[data-label=${label}]`, {zIndex: 0})
    })
  })
  }

});







function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    styles: [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 40
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
      {
        "lightness": 17
      },
      {
        "color": "#1b1919"
      }
      ]
    }
    ],
  });
}











