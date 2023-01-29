// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
console.log(galleryContainer);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
         
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"   alt = "${description}" /> </a>
        `;
    })
    .join("");
    };


    
new SimpleLightbox('.gallery a', {
	captionDelay: 250,
  captionsData: 'alt',
})

 
