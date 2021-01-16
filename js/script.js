document.addEventListener('DOMContentLoaded', function() {


  const info = document.querySelectorAll('.info');
  const infoText = document.querySelectorAll('.item__info-text');

  for(let i = 0; i < info.length; i++) {
    info[i].addEventListener('mouseover', function() {
      infoText[i].classList.add('item__info-text--active');
    });
    info[i].addEventListener('mouseout', function() {
      infoText[i].classList.remove('item__info-text--active');
    });
  }

  const complexHead = document.querySelector('.complex__head');
  const complexCategory = complexHead.querySelectorAll('.complex__category');
  const complexProduct = document.querySelectorAll('.complex__product');
  
  function hideTab() {
    for(let i = 0; i < complexCategory.length; i++) {
      complexCategory[i].addEventListener('click', function() {
        showTabs(i);
      });
    }
  }
  
  function showTabs(n) {
    for(let i = 0; i < complexProduct.length; i++) {
      complexCategory[i].classList.remove('complex__category--active');
      complexProduct[i].classList.remove('complex__product--active');
      complexCategory[n].classList.add('complex__category--active');
      complexProduct[n].classList.add('complex__product--active');

    }
  }

  showTabs(0);
  hideTab();

});