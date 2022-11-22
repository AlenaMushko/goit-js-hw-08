
//   1) Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями 
// email і message, у яких зберігай поточні значення полів форми.
// 3) Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з 
// полями email, message та їхніми поточними значеннями.

//  перевіряти всі значення, які ви читаєте з localStorage і 
// записуєте в поля форми.Якщо там пусто, вам у поля запишеться undefined.При сабміті форми
//  не забувайте чистити обʼєкт в якому зберігаєте значення з полів форми, щоб інформація не 
//  тягнулась в наступні сабміти.Форма має відправлятись при заповнених 2 - х полях форми

import throttle from "lodash.throttle";

const refs = {
  formEl: document.querySelector('.feedback-form'),
  textareaEl : document.querySelector('.feedback-form textarea'),
}
const STORAGE_KEY = 'feedback-form-state';
// зберігаємо імейл та повідомлення в обєкт
let formData = {};
refs.formEl.addEventListener('input', e =>{
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

  refs.formEl.addEventListener('submit', onFormSubmit);
  refs.textareaEl.addEventListener('input', throttle(onTextareaInput, 500) );
 
function onTextareaInput(e){
  // отримуємо значення
  const message = e.target.value;
  // зберігаємо його в сховище
  localStorage.setItem(STORAGE_KEY, message )
  
}

function onFormSubmit(e){
  // Х поведінку по замовчуванню
e.preventDefault;
// Забираємо повідомлення із сховища і чистимо форму, reset() для очистки форм
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY); 
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
// console.log();
