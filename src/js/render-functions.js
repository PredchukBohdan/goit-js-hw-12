import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryPopup = new SimpleLightbox('.images-gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  className: 'gallery-popup',
});

export function renderErrorMessage() {
  return iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: 'white',
    iconColor: 'white',
    iconUrl: '../img/group.svg',
    progressBar: true,
    timeout: 10000,
    animateInside: false,
    messageSize: '16',
    transitionIn: 'fadeIn',
    class: 'error',
  });
}

export function renderInfoMessage() {
  return iziToast.info({
    message: `We're sorry, but you've reached the end of search results.`,
    position: 'topRight',
    messageColor: '#000',
    iconColor: '#000',
    progressBar: true,
    timeout: 10000,
    animateInside: false,
    messageSize: '16',
    transitionIn: 'fadeIn',
  });
}

export function renderImages(images, gallery) {
  const imagesHTMLArray = images.map(image => {
    return `<li class="gallery-item">
                 <a href="${image.largeImageURL}" class="gallery-link">
                    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" width="500"/>
                 </a>
                 <ul class="gallery-info">
                    <li class="gallery-likes">
                        <span class="title">Likes</span>
                        <span class="content">${image.likes}</span>
                    </li>
                    <li class="gallery-views">
                        <span class="title">Views</span>
                        <span class="content">${image.views}</span>
                    </li>
                    <li class="gallery-comments">
                        <span class="title">Comments</span>
                        <span class="content">${image.comments}</span>
                    </li>
                    <li class="gallery-downloads">
                        <span class="title">Downloads</span>
                        <span class="content">${image.downloads}</span>
                    </li>
                 </ul>
              </li>`;
  });
  gallery.insertAdjacentHTML('beforeend', imagesHTMLArray.join(''));
  galleryPopup.refresh();
}

export function toggleLoader(loader) {
  loader.classList.toggle('show');
}
