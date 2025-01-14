// main
$('.nationBox').slick({
   dots: false,
   infinite: true,
   speed: 500,
   autoplay: true,
   autoplaySpeed: 5000,
   slidesToShow: 6,
   //fade: true,
   adaptiveHeight: true,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 5,
         },
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         },
      },
      {
         breakpoint: 640,
         settings: {
            slidesToShow: 2,
            arrows: false,
         },
      },
   ],
});

// 반응형 내비탭
var menuLeft = document.getElementById('cbp-spmenu-s1'),
   showLeft = document.getElementById('showLeft'),
   body = document.body;

showLeft.onclick = function () {
   classie.toggle(this, 'active');
   classie.toggle(menuLeft, 'cbp-spmenu-open');
   disableOther('showLeft');
};

function disableOther(button) {
   if (button !== 'showLeft') {
      classie.toggle(showLeft, 'disabled');
   }
}
