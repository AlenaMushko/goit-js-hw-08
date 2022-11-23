import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  textareaEl: document.querySelector('.feedback-form textarea'),
  emailEl: document.querySelector('.feedback-form input'),
};
const STORAGE_KEY = 'feedback-form-state';
// зберігаємо імейл та повідомлення в обєкт
let formData = {};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(e) {
  // отримуємо значення
  formData[e.target.name] = e.target.value;
  // зберігаємо його в сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  // Х поведінку по замовчуванню
  e.preventDefault();
  // Забираємо повідомлення із сховища і чистимо форму, reset() для очистки форм
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  // Форма відправляється при заповнених 2-х полях форми
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function populateFromLocalStorage() {
  // при перезагрузці форми зберігається повідомлення, якщо воно не було відправлене
  const savadMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // якщо вже є відгук, то його записуємо в localStorage
  if (savadMessage) {
    refs.textareaEl.value = savadMessage.textareaEl;
    refs.emailEl.value = savadMessage.emailEl;
  }
}
populateFromLocalStorage();
