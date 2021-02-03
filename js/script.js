document.addEventListener('DOMContentLoaded', function() {

  const body = document.querySelector('body');

  const info = document.querySelectorAll('.info');
  const infoText = document.querySelectorAll('.item__info-text');

  for (let i = 0; i < info.length; i++) {
    info[i].addEventListener('mouseover', function() {
      infoText[i].classList.add('item__info-text--active');
    });
    info[i].addEventListener('mouseout', function() {
      infoText[i].classList.remove('item__info-text--active');
    });
  }
  
  const complexCategory = document.querySelectorAll('.complex__category');
  const complexProduct = document.querySelectorAll('.complex__product');

  function hideTab() {
    for (let i = 0; i < complexCategory.length; i++) {
      complexCategory[i].addEventListener('click', function() {
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

  const productsBtn = document.querySelectorAll('.product__btn');
  const orderBtn = document.querySelectorAll('#order');
  const catalogBtn = document.querySelector('#catalog');

  const orderClose = document.querySelectorAll('.order__close');

  const orderHeader = document.querySelector('.order-header');
  const orderComplex = document.querySelector('.order-complex');
  const orderCatalog = document.querySelector('.order-catalog');

  const overlay = document.querySelector('.overlay');

  catalogBtn.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.classList.add('overlay--active');
      orderCatalog.classList.add('order--active');
      body.classList.add('body--overflow');
  });

  orderBtn.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.classList.add('overlay--active');
      orderHeader.classList.add('order--active');
      body.classList.add('body--overflow');
    });
  });

  productsBtn.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.classList.add('overlay--active');
      orderComplex.classList.add('order--active');
      body.classList.add('body--overflow');
    });
  });

  orderClose.forEach(item => {
    item.addEventListener('click', function() {
      overlay.classList.remove('overlay--active');
      orderHeader.classList.remove('order--active');
      orderComplex.classList.remove('order--active');
      orderCatalog.classList.remove('order--active');
      body.classList.remove('body--overflow');
    });
  });

  overlay.addEventListener('click', function() {
    this.classList.remove('overlay--active');
    orderHeader.classList.remove('order--active');
    orderComplex.classList.remove('order--active');
    orderCatalog.classList.remove('order--active');
    body.classList.remove('body--overflow');
  });  

  const form = document.querySelectorAll('.form');

  form.forEach(item => {
    item.addEventListener('submit', function(e) {
      e.preventDefault();
      let input = this.querySelector('input');

      input.value = 'Это тест!';

      setTimeout(function() {
        overlay.classList.remove('overlay--active');
        orderHeader.classList.remove('order--active');
        orderComplex.classList.remove('order--active');
        orderCatalog.classList.remove('order--active');
        body.classList.remove('body--overflow');
      }, 1000);
      clearTimeout();
    });
  });

let select = function() {
  const selectHead = document.querySelector('.select__head');
  const selectItem = document.querySelectorAll('.select__item');

  selectHead.addEventListener('click', function() {
    this.parentElement.classList.toggle('select--active');
  });

  selectItem.forEach(item => {
    item.addEventListener('click', function() {
      let text = this.innerText,
          selectCurrent = document.querySelector('.select__current'),
          dataSelect = this.getAttribute('data-select');
      selectCurrent.innerText = text;
      selectHead.parentElement.classList.toggle('select--active');
      showSelects(dataSelect);
      selectedItem(dataSelect);
    });
  });

  let selectedItem = function(n) {
    for (let i = 0; i < selectItem.length; i++) {
      selectItem[i].classList.remove('select__item--active');
      selectItem[n].classList.add('select__item--active');
    }
  };
  
  let showSelects = function(n) {
    for (let i = 0; i < complexProduct.length; i++) {
      complexProduct[i].classList.remove('complex__product--active');
      complexProduct[n].classList.add('complex__product--active');
    }
  };
};

select();

});