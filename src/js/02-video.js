// 3) Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing player,
//   але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// 4)Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу
// відтворення.
// 5)Зберігай час відтворення у локальне сховище.Нехай ключем для сховища буде рядок
// "videoplayer-current-time".
// 6)Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою
//  відновлення відтворення зі збереженої позиції.
// 7)Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення
// оновлювався у сховищі не частіше, ніж раз на секунду.

// метод on() з подією timeupdate і метод setCurrentTime() для встановлення
//  часу після перезавантаження сторінки.Також не забуваємо перевіряти наявність данних,
//   коли читаєте з localStorage.Якщо в localStorage немає ключа, який ви намагаєтесь
// прочитати, метод getItem(key) поверне вам null.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Vimeo.Player(iframe);
 
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));