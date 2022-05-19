/* eslint-disable operator-linebreak */
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

$('.find-tags li').click(function () {
  $('.find-tags li').removeClass('active');
  $(this).addClass('active');
});

/*
 * Выпадающий список с чекбоксами
 */

$('.lead-select__open').click(function () {
  const thisDropdown = $(this).next();

  $('.lead-select__dropdown').slideUp(200);

  if (thisDropdown.is(':hidden')) thisDropdown.slideDown(200);
});

$('.lead-select__check span').click(function () {
  const checkbox = $(this).closest('.lead-select__dropdown');

  checkbox.find('input:checkbox:checked').length ===
  checkbox.find('input:checkbox').length
    ? checkbox.find('input:checkbox').prop('checked', false)
    : checkbox.find('input:checkbox').prop('checked', true);
});

$('.lead-select').each(function (i, item) {
  $('.lead-select__dropdown .btn', item).click(function () {
    const checked = [];

    $(this).closest('.lead-select__dropdown').slideUp(200);

    $('.checkbox input:checked', item).each(function () {
      checked.push($(this).next().text());
    });

    $('.lead-select__input', item).val(checked.join(', '));
  });
  $('.lead-select__content', item).overlayScrollbars({});
});

/*
 * Слайдеры
 */

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
