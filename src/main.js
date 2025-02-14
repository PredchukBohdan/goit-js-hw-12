import axiosRequest from './js/pixabay-api';
import {
  renderErrorMessage,
  renderImages,
  toggleLoader,
} from './js/render-functions';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const imagesGallery = document.querySelector('.images-gallery');
  const loader = document.querySelector('.loader');

  function initialGallery(e) {
    e.preventDefault();
    const searchInput = form.elements.search.value;
    if (!searchInput) return;

    toggleLoader(loader);
    imagesGallery.innerHTML = '';

    axiosRequest(searchInput.trim())
      .then(response => {
        const images = response.data.hits;
        if (!images.length) {
          imagesGallery.innerHTML = '';
          toggleLoader(loader);
          renderErrorMessage();
        } else {
          renderImages(images, imagesGallery);
          toggleLoader(loader);
        }
      })
      .catch(error => {
        console.log(error);
        toggleLoader(loader);
      })
      .finally(() => {
        form.reset();
      });
  }

  form.addEventListener('submit', initialGallery);
});
