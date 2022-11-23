
// import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.min.css";
// import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
import galleryCardTpl from '../templates/gallery-card.hbs';
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickCreateModalWindow);

const itemEl = galleryItems.map(galleryCardTpl).join("");

galleryEl.insertAdjacentHTML("beforeend", itemEl);

function onClickCreateModalWindow(e) {
  // забороняємо стандартні дії
  e.preventDefault();
  // вказую, що відкривати лише img
  const isIMGEl = e.target.nodeName;
  if (isIMGEl !== "IMG") {
    return;
  }
}
  // підключаємо бібліотеку SimpleLightbox
//  const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionsDelay: 250,
//   })

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', onShowImg); 
//  function onShowImg() {
//    captionsData = "alt";
//    captionsDelay= 250;
// }

