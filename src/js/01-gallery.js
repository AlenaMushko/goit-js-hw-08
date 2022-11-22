// 1) Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи
// npm(посилання на CDN з твоєї минулої роботи більше не потрібне).
// 2) Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг
//  з урахуванням того, що бібліотека була встановлена через npm(синтаксис import /export).
// 3) Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт,
//    крім того, що описаний в документації.

// Описаний в документації
// import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickCreateModalWindow);

const itemEl = galleryItems
  .map(
    (image) => `
<a class="gallery__item" href =${image.original} ><img class="gallery__image" 
  src = ${image.preview} alt = ${image.description}/></a>`
  )
  .join("");

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
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
console.log(galleryItems);



console.log(galleryItems);
