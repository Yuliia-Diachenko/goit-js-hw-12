import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.querySelector('#search-input');
export let page = 1;
export let limit = 15;
export const loadButton = document.querySelector('#load-button');
export const loaderDiv = document.querySelector('#loader');

const searchForm = document.querySelector(".form-inline")
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();  
  query = inputQuery.value.trim();
  galleryList.innerHTML = '';
  loaderDiv.className = 'loader';
  loadButton.className = 'visually-hidden';
  page = 1;
  limit = 15;
  try {
    if (query) {
      loadButton.className = '';
      const posts = await fetchImages(query);
      renderImages(posts);
      loaderDiv.className = 'loader visually-hidden';
      page += 1;
    }
  } catch (error) {
    loadButton.className = 'visually-hidden';
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
      position: 'topRight',
      
    });
  }
  searchForm.reset();
});

loadButton.addEventListener('click', async () => {
  loaderDiv.className = 'loader';
    try {
    if (query) {
      const posts = await fetchImages(query);
      const totalItems = posts.totalHits;   
      if (page >= totalItems) {
        loadButton.className = 'visually-hidden';
        loaderDiv.className = 'visually-hidden';
        return iziToast.error({
          title: 'Error',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
      renderImages(posts);
      loaderDiv.className = 'loader visually-hidden';
      page += 1;
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
      position: 'topRight',
    });
  }
});
const scrollToTopBtn = document.querySelector(".scroll-up");
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);