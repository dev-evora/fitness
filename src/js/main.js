/* eslint-disable no-inner-declarations */
// const viewportFix = (width) => {
//   const meta = $('meta[name="viewport"]');
//   meta.attr('content', 'user-scalable=no, width=' + (screen.width <= width ? width : 'device-width'));
// };

// viewportFix(375);

$('[data-fancybox]').fancybox({
  touch: false,
  autoFocus: false,
  backFocus: false,
  closeExisting: true,
});

const maskPhone = () => {
  const maskedElements = [];
  const el = document.querySelectorAll('.masked');
  if (el.length > 0) {
    const mask = {
      mask: '+7 (000) 000-00-00',
    };
    el.forEach((item) => {
      maskedElements.push(new IMask(item, mask));
    });
  }
  $('.masked').click(function () {
    if ($(this).val() == '') $(this).val('+7 ');
  });
};

maskPhone();

if ($('.promo-slider').length) {
  const slider = new Swiper('.promo-slider', {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.promo-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
}

const createSwiper = (el, props) => {
  if ($(el).length) {
    const slider = new Swiper(el, {
      observer: true,
      observeParents: true,
      simulateTouch: false,
      navigation: {
        nextEl: '.control-next',
        prevEl: '.control-prev',
      },
      pagination: {
        el: '.control-count',
        type: 'fraction',
      },
      ...props,
    });
  }
};

createSwiper('.find-event', {
  slidesPerGroup: 4,
  slidesPerView: 4,
  spaceBetween: 20,
});

createSwiper('.find-trainer', {
  slidesPerGroup: 2,
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
});

createSwiper('.find-dir', {
  slidesPerGroup: 4,
  slidesPerView: 4,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
});

createSwiper('.popular-slider', {
  slidesPerGroup: 4,
  slidesPerView: 4,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
});

$('.find-tags li').click(function () {
  $('.find-tags li').removeClass('active');
  $(this).addClass('active');
});
