const btnHideTitle = document.querySelector('#hideTitle');

const hideTitle = () => {
  const title = document.querySelector('.content__title');
  title.classList.toggle('not-visible');
}

btnHideTitle.addEventListener('click', hideTitle);