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

// Робираємо рядок на масив слів та заміняємо перший символ кожного рядка на '!'
str1 = str1
  .split(' ')
  // Оскільки рядок - це immutable object, треба спочатку робити копію зі змінами, а потім перезаписувати рядок
  .map((w) => '!' + w.slice(1))
  .join(' ');

// Рядок після змін
console.log(str1);

// Хоча в завданні сказано ЗАМІНИТИ символи, ось варіант без перезапису (просто виведення нового рядка):
// console.log(
//   str1
//     .split(' ')
//     .map((w) => '!' + w.slice(1))
//     .join(' '),
// );

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
    0
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
function isPalindrom(inputString, symbolsToIgnore) {
  // Перевірка на те, чи кожен символ рядка дорівнює символу перегорнутого рядка з цим же індексом,
  return [...inputString.toLowerCase()]
    .filter((char) => symbolsToIgnore.includes(char) === false)
    .every((char, index, array) => char === array.toReversed()[index]);
}

// Усі символи, які слід ігнорувати для нормальної ідентифікації паліндрома (можна додавати та видаляти, це спроба замінити регулярні вирази)
const symbolsToIgnore = [' ', ',', '—', '?', '!', ':', ';', '.'];

const str4 = 'qwertrewq';
const str5 = 'qwerty';
const str45 = 'Never odd or even';
const str54 = 'І що сало? Ласощі...';
const str454 = 'Е, ти дурен, ерудите!';
const str545 = 'Ущипне — та шатен: пищу!';

console.log(isPalindrom(str4, symbolsToIgnore));
console.log(isPalindrom(str5, symbolsToIgnore));
console.log(isPalindrom(str45, symbolsToIgnore));
console.log(isPalindrom(str54, symbolsToIgnore));
console.log(isPalindrom(str454, symbolsToIgnore));
console.log(isPalindrom(str545, symbolsToIgnore));

// Завдання 6

/**
 * Function gets string and finds the longest word in it
 * @param {string} inputString string to find longest word
 * @returns {string | object} string if the longest word is only one, object if more
 */
function getLongestWord1(inputString) {
  return inputString
    .split(' ')
    .reduce(
      (longest, word) => (longest.length < word.length ? word : longest),
      ''
    );
}

// Приклад використання функцій
const str6 = 'Adipisicing elit';
const str7 = 'Lorem ipsum dolor sit amet';

console.log(getLongestWord1(str6));
console.log(getLongestWord1(str7));
