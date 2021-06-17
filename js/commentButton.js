//В блоке 'comment' при нажатии на 'comment__button' переключает русскоязычные отзывы на англоязычные и на оборот.

let commentContainerRu = document.querySelector('.comment__container--ru');
let commentContainerEn = document.querySelector('.comment__container--en');
let commentButtonRu = document.querySelector('.comment__button--ru');
let commentButtonEn = document.querySelector('.comment__button--en');
let bannerButtom = document.querySelector('.banner__buttom');
let storiesBtn = document.querySelector('.stories__btn');
let commentLinks = document.querySelectorAll('.comment__link');

commentButtonRu.addEventListener ('click', function() {
  commentButtonRu.classList.remove('comment__button--disable');
  commentButtonRu.classList.add('comment__button--enable');
  commentButtonEn.classList.remove('comment__button--enable');
  commentButtonEn.classList.add('comment__button--disable');
  commentContainerRu.classList.remove('comment__container--disable')
  commentContainerEn.classList.add('comment__container--disable')
})

commentButtonEn.addEventListener ('click', function() {
  commentButtonEn.classList.remove('comment__button--disable');
  commentButtonEn.classList.add('comment__button--enable');
  commentButtonRu.classList.add('comment__button--disable');
  commentButtonRu.classList.remove('comment__button--enable');
  commentContainerEn.classList.remove('comment__container--disable')
  commentContainerRu.classList.add('comment__container--disable')
})

bannerButtom.addEventListener('click', function (evt) {
  evt.preventDefault();
})

storiesBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
})

for (let commentLink of commentLinks) {
  commentLink.addEventListener('click', function (evt) {
    evt.preventDefault();
  })
}
