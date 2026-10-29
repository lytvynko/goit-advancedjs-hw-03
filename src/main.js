import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

const toastOptions = {
  position: 'topRight',
  backgroundColor: '#ef4040',
  messageColor: '#ffffff',
  titleColor: '#ffffff',
  iconColor: '#ffffff',
  progressBar: false,
  close: true,
  timeout: 4000,
  maxWidth: 432, 
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      ...toastOptions,
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          ...toastOptions,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        ...toastOptions,
        message: 'Something went wrong. Please try again later!',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
