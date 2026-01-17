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
function countVowels(inputString) {
  // Масив голосних (винесено для зручності, можна було б і перелічувати в довгій умові if)
  const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
  return [...inputString.toLowerCase()].reduce(
    (accum, char) => (vowelsArray.includes(char) ? accum + 1 : accum),
    0,
  );
}

// Перевірка роботи функції
const str2 = 'Hello, world!';
const str3 = 'Aeiouy';
console.log(countVowels(str2));
console.log(countVowels(str3));
