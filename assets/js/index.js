// Завдання 1

const stringsHref = [
  'http://example.com&quot',
  'https://openai.com&quot',
  'ftp://website.com&quot',
  'http://google.com&quot',
  'https://stackoverflow.com&quot',
  'http://github.com&quot',
  'http://youtube.com&quot',
  'https://wikipedia.org&quot',
  'ftp://server.net&quot',
  'http://facebook.com&quot',
  'https://amazon.com&quo',
  'http://twitter.com&quot',
  'https://linkedin.com&quot',
  'ftp://host.com&quot',
  'http://reddit.com&quot',
  'https://medium.com&quot',
];

// Варіант з мутацією масиву
console.log(stringsHref); // Вивід вихідного масиву

// Перебір масива з кінця на початок (для видалення останніх індексів, щоб не призводити до помилок при подальшому переборі)
for (let i = stringsHref.length - 1; i > 0; i--) {
  if (stringsHref[i].startsWith('http://') === false) {
    // Видалення елементу, якщо він не починається з 'http://'
    stringsHref.splice(i, 1);
  }
}

console.log(stringsHref); // Вивід переробленого масиву

// Варіант без мутації масиву (Не за умовою завдання, але вирішив залишити)
// const newStringsHref = stringsHref.filter((href) => href.startsWith('http://'));
// console.log(newStringsHref);

// Завдання 2

const fileNames = [
  'index.html',
  'styles.css',
  'script.js',
  'about.html',
  'contact.html',
  'home.html',
  'blog-post-1.html',
  'blog-post-2.html',
  'services.html',
  'portfolio.html',
  'projects.html',
  'gallery.html',
  'faq.html',
  'terms.html',
  'privacy-policy.html',
];

// Варіант з мутацією масиву
console.log(fileNames); // Вивід вихідного масиву

// Перебір масива з кінця на початок (для видалення останніх індексів, щоб не призводити до помилок при подальшому переборі)
for (let i = fileNames.length - 1; i > 0; i--) {
  if (fileNames[i].endsWith('.html') === false) {
    // Видалення елементу, якщо він не починається з 'http://'
    fileNames.splice(i, 1);
  }
}

console.log(fileNames); // Вивід переробленого масиву

// Варіант без мутації масиву (Не за умовою завдання, але вирішив залишити)
// const newFileNames = fileNames.filter((file) => file.endsWith('.html'));
// console.log(newFileNames);

// Завдання 3

let str1 = 'abcde abcde abcde abcde';

// Рядок до змін (адже треба ЗАМІНИТИ символи рядка)
console.log(str1);

// Робираємо рядок на масив слів
str1 = str1.split(' ');

for (let i = 0; i < str1.length; i++) {
  // Розбираємо рядок (кожне окреме слово) на масив символів (тимчасова змінна word винесена для підвищення читабельності)
  let word = [...str1[i]];
  // Перезаписуємо перший символ на !
  word[0] = '!';
  // Збираємо масив назад в рядок
  str1[i] = word.join('');
}

str1 = str1.join(' ');

// Рядок після змін
console.log(str1);

// Завдання 4

/**
 * Function gets string and calculates count of vowels it includes
 * @param {string} inputString input string to count vowels from
 * @returns {number} count of vowels in string
 */
function countVowels(inputString, vowelsArray) {
  // Масив голосних (винесено для зручності, можна було б і перелічувати в довгій умові if)
  return [...inputString.toLowerCase()].reduce(
    (accum, char) => (vowelsArray.includes(char) ? accum + 1 : accum),
    0,
  );
}

// Масив голосних літер
const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];

// Перевірка роботи функції
const str2 = 'Hello, world!';
const str3 = 'Aeiouy';

console.log(countVowels(str2, vowelsArray));
console.log(countVowels(str3, vowelsArray));

// Завдання 5

/**
 * Function gets string and checks it for being a palindrome
 * @param {string} inputString string to check
 * @returns {boolean}
 */
function isPalindrom(inputString) {
  let isPalindromFlag = false; // Булева змінна-перемикач (флаг) для запису і повернення значення
  // Цикл перебору рядка одночасно з двох кінців, щоб дізнатись - він паліндром, чи ні
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - i - 1]) {
      isPalindromFlag = false; // Оновлення змінної, якщо вона була true і неспівпадіння знайдено
      break;
    } else {
      isPalindromFlag = true; // Оновлення змінної, якщо неспівпадіння немає
    }
  }
  return isPalindromFlag;
}

const str4 = 'qwertrewq';
const str5 = 'qwerty';

console.log(isPalindrom(str4));
console.log(isPalindrom(str5));

// Завдання 6

/**
 * Function gets string and finds the longest word in it
 * @param {string} inputString string to find longest word
 * @returns {string | object} string if the longest word is only one, object if more
 */
function getLongestWord(inputString) {
  // Використання метода split(' ') для розбиття рядка на масив слів
  // з подальшим застосуванням метода reduce() для перебору масиву з одночасним повертанням найдовшого(-их) слова(-ів)
  return inputString.split(' ').reduce((longest, word) => {
    // Перевірка на тип даних string для уникнення помилок і правильного виводу
    if (typeof longest === 'string') {
      // Випадок, коли наступне слово більше поточного
      if (longest.length < word.length) {
        longest = word; // Просто заміняємо слово
        // У випадку, коли наступне й поточне слово однакові за довжиною
      } else if (longest.length === word.length) {
        let temp = longest; // Тимчасова змінна для збереження значення
        longest = [temp, word]; // Перетворення поточного слова на масив, у складі якого поточне й наступне слова
      }
      // У випадку, коли тип даних не string (тобто тільки object, тому що став масивом)
    } else {
      // Коли наступне слово більше за перший елемент масиву (суті не міняє який, адже вони однакові за довжино)
      if (longest[0].length < word.length) {
        longest = word; // Перетворення масиву знову на string з присвоєнням значення наступного слова
        // Коли наступне слово й перший елемент масиву однакові за довжиною
      } else if (longest[0].length === word.length) {
        longest.push(word); // Додаємо ще один елемент в масив
      }
    }
    return longest;
    // Початкове значення змінної-акумулятора - порожній рядок '', щоб було з чим порівнювати в першій умові
  }, '');
}

// Приклад використання функції
const str6 = 'Adipisicing elit'; // Якщо найдовше слово одне
const str7 = 'Lorem ipsum dolor sit amet'; // Якщо найдовших слів декілька
console.log(getLongestWord(str6));
console.log(getLongestWord(str7));
