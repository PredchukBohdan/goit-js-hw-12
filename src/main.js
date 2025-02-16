import axiosRequest from './js/pixabay-api';
import {
  renderErrorMessage,
  renderInfoMessage,
  renderImages,
  toggleLoader,
} from './js/render-functions';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const loadMoreButton = document.querySelector('.load');
  const imagesGallery = document.querySelector('.images-gallery');
  const loader = document.querySelector('.loader');
  const limit = 40;
  let page = 1;
  let currentValue = '';
  let totalPages = 1;

  function initialGallery(e) {
    e.preventDefault();
    const searchInput = form.elements.search.value;
    if (!searchInput) return;

    currentValue = searchInput;
    loadMoreButton.classList.remove('show');
    toggleLoader(loader);
    imagesGallery.innerHTML = '';
    page = 1;
    handleRequest(searchInput, page, limit);
  }

  async function handleRequest(value, page, limit) {
    try {
      const response = await axiosRequest(value.trim(), page, limit);
      totalPages = Math.ceil(response.totalHits / limit);
      const images = response.hits;
      if (!images.length) {
        imagesGallery.innerHTML = '';
        renderErrorMessage();
        loadMoreButton.classList.remove('show');
      } else {
        renderImages(images, imagesGallery);
        loadMoreButton.classList.toggle('show', page < totalPages);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoader(loader);
      form.reset();
    }
  }
  async function loadMore() {
    if (page >= totalPages) return;
    toggleLoader(loader);
    loadMoreButton.classList.remove('show');
    page++;

    try {
      const response = await axiosRequest(currentValue.trim(), page, limit);
      const images = response.hits;
      renderImages(images, imagesGallery);
      loadMoreButton.classList.add('show');
      smoothScroll();

      if (page >= totalPages) {
        loadMoreButton.classList.remove('show');
        renderInfoMessage();
      }
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoader(loader);
      form.reset();
    }
  }
  function smoothScroll() {
    const firstImage = imagesGallery.querySelector('.gallery-item');
    if (firstImage) {
      const cardHeight = firstImage.getBoundingClientRect().height;
      console.log(cardHeight);
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  }

  form.addEventListener('submit', initialGallery);
  loadMoreButton.addEventListener('click', loadMore);
});
