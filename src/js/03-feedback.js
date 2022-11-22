// Під час сабміту форми виводь у консоль об'єкт з полями email, message.

import throttle from "lodash.throttle";

const refs = {
  formEl: document.querySelector('.feedback-form'),
  textareaEl: document.querySelector('.feedback-form textarea'),
  inputEl: document.querySelector('input'),
}
const STORAGE_KEY = 'feedback-form-state';
// зберігаємо імейл та повідомлення в обєкт
let formData = {};

refs.formEl.addEventListener('input', onFormData);
refs.formEl.addEventListener('submit', onFormSubmit);
// refs.formEl.addEventListener('submit', onRightSubmit);
refs.textareaEl.addEventListener('input', throttle(onTextareaInput, 500) );
 
function onTextareaInput(e){
  // отримуємо значення
  const message = e.target.value;
  // зберігаємо його в сховище
  localStorage.setItem(STORAGE_KEY, message )
}

function onFormSubmit(e){
  // Х поведінку по замовчуванню
e.preventDefault();
// Забираємо повідомлення із сховища і чистимо форму, reset() для очистки форм
e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY); 
 // Форма відправляється при заповнених 2-х полях форми
onRightSubmit()
 
}

populateTextarea();
function populateTextarea(){
  // при перезагрузці форми зберігається повідомлення, якщо воно не було відправлене
const savadMessage = localStorage.getItem(STORAGE_KEY);
  // якщо вже є відгук, то його записуємо в localStorage
if (savadMessage){
   refs.textareaEl.value = savadMessage;
}
}

function onFormData(e){
  formData[e.target.name] = e.target.value;
  console.log(formData);
  // return formData;
};

function onRightSubmit(e) {
 if (refs.inputEl.value === '' || refs.textareaEl.value === '') {
     alert("Заповніть, будь ласка, всі поля");
 } else {
   onFormData();
  }
}

