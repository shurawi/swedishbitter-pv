let upButton = document.querySelector('.head__btn');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('head__btn--show');
  } else {
    upButton.classList.remove('head__btn--show');
  }
};

upButton.addEventListener('click', function (e) {
  e.preventDefault ();

  let linkId = upButton.getAttribute('href');

  document.querySelector(linkId).scrollIntoView ({
    behavior: 'smooth',
    block: 'start'
  })
})
