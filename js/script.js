document.addEventListener('DOMContentLoaded', function () {


  const info = document.querySelectorAll('.info');
  const infoText = document.querySelectorAll('.item__info-text');

  for (let i = 0; i < info.length; i++) {
    info[i].addEventListener('mouseover', function () {
      infoText[i].classList.add('item__info-text--active');
    });
    info[i].addEventListener('mouseout', function () {
      infoText[i].classList.remove('item__info-text--active');
    });
  }

  const complexHead = document.querySelector('.complex__head');
  const complexCategory = complexHead.querySelectorAll('.complex__category');
  const complexProduct = document.querySelectorAll('.complex__product');

  function hideTab() {
    for (let i = 0; i < complexCategory.length; i++) {
      complexCategory[i].addEventListener('click', function () {
        showTabs(i);
      });
    }
  }

  function showTabs(n) {
    for (let i = 0; i < complexProduct.length; i++) {
      complexCategory[i].classList.remove('complex__category--active');
      complexProduct[i].classList.remove('complex__product--active');
      complexCategory[n].classList.add('complex__category--active');
      complexProduct[n].classList.add('complex__product--active');

    }
  }
  showTabs(0);
  hideTab();

  /* Slider */

  let windowWidht = window.innerWidth;

  const slide = '.slider-slide';
  const slideActive = 'slider-slide--active';
  const next = '.slider-button-next';
  const prev = '.slider-button-prev';


  function slider(slide, next, prev, slideActive) {
    const swiperSlide = document.querySelectorAll(slide);
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
  
    function showSlide(n) {
      for (let i = 0; i < swiperSlide.length; i++) {
        swiperSlide[i].classList.remove(slideActive);
        swiperSlide[n].classList.add(slideActive);
      }
    }
  
    function hideSlide() {
      let i = 0;
      nextBtn.addEventListener('click', function () {
        if (i < swiperSlide.length - 1) {
          i++;
          showSlide(i);
        }
      });
      prevBtn.addEventListener('click', function () {
        if (i <= 0) {
          return;
        } else {
          i--;
          showSlide(i);
        }
      });
    }
  
    showSlide(0);
    hideSlide();
  }
  slider(slide, next, prev, slideActive);

  const categoryItem = '.category__item';
  const categoryItemActive = 'category__item--active';
  const categoryNext = '.category-button-next';
  const categoryPrev = '.category-button-prev';
  function sliderCategory(slide, next, prev, slideActive) {
    const swiperSlide = document.querySelectorAll(slide);
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
  
    function showSlide(n) {
      for (let i = 0; i < swiperSlide.length; i++) {
        if(windowWidht <= 960) {
          swiperSlide[i].classList.remove(slideActive);
          swiperSlide[n].classList.add(slideActive);
          swiperSlide[n+1].classList.add(slideActive);
        }
        if (windowWidht <= 480) {
          swiperSlide[i].classList.remove(slideActive);
          swiperSlide[n].classList.add(slideActive);
        }
      }
    }
  
    function hideSlide() {
      let i = 0;
      nextBtn.addEventListener('click', function () {
        if (i < swiperSlide.length - 2) {
          i++;
          showSlide(i);
        }
      });
      prevBtn.addEventListener('click', function () {
        if (i <= 0) {
          return;
        } else {
          i--;
          showSlide(i);
        }
      });
    }
  
    showSlide(0);
    hideSlide();
  }

    sliderCategory(categoryItem, categoryNext, categoryPrev, categoryItemActive);

});