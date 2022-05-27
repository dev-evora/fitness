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

$('.event-filter').each(function (i, item) {
  $('.event-filter__content', item).overlayScrollbars({});
});

/*
 * Бегунки в фильтре
 */

const triplets = (str) => {
  return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

$('.js-range-slider').ionRangeSlider();

$('.event-filter__price').ionRangeSlider({
  onStart: updatePrice,
  onChange: updatePrice,
  onFinish: updatePrice,
  hide_from_to: true,
});

function updatePrice(data) {
  const from = data.from;
  const to = data.to;

  $('#price-min').text(triplets(from));
  $('#price-max').text(triplets(to));
}

$('.event-filter__rating').ionRangeSlider({
  onStart: updateRating,
  onChange: updateRating,
  onFinish: updateRating,
  hide_from_to: true,
});

function updateRating(data) {
  const from = data.from;
  const to = data.to;

  $('#rating-min').text(from);
  $('#rating-max').text(to);
}

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

createSwiper('.trainer-reviews', {
  slidesPerGroup: 4,
  slidesPerView: 4,
  spaceBetween: 20,
});

/*
 * Показать все разделы
 */

const eventList = () => {
  const eventListMain = $('.event-list');
  const eventListItem = $('.event-list li');
  const eventListMore = $('.event-list__more');

  if (eventListMain.height() - 20 > eventListItem.height()) {
    eventListMain.addClass('overflow');
    eventListMore.show();
  }

  eventListMore.click(function () {
    $(this).hide();
    eventListMain.removeClass('overflow');
  });
};

eventList();

/*
 * Табы
 */

const tabs = () => {
  $('.tab-list li').click(function () {
    const tabID = $(this).attr('data-tab');

    $('.tab-list li').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('active');
    $('.tab-content[data-tab=' + tabID + ']').addClass('active');
  });
};

tabs();

if ($('.trainer-photo').length) {
  const thumbs = new Swiper('.trainer-photo__thumbs', {
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    slidesPerView: 5,
  });

  const main = new Swiper('.trainer-photo__main', {
    watchSlidesProgress: true,
    thumbs: {
      swiper: thumbs,
    },
  });
}

$('.video').each(function (i, item) {
  const video = $(item).attr('href');
  const videoID = video.match(
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  );

  $('> img', item).attr(
    'src',
    'https://i.ytimg.com/vi/' + videoID[2] + '/sd1.jpg'
  );
});
