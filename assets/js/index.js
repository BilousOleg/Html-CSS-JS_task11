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

// Варіант 1 (Через перезапис та перетворення рядка на масив і навпаки у потрібному випадку)

/**
 * Function gets string and finds the longest word in it
 * @param {string} inputString string to find longest word
 * @returns {string | object} string if the longest word is only one, object if more
 */
function getLongestWord1(inputString) {
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

/**
 * Function gets string and checks whether it has only one longest word or more
 * @param {string} inputString string value to check
 * @returns {boolean}
 */
function isOnlyLongest(inputString) {
  let count = 0;
  inputString.split(' ').reduce((longest, word) => {
    if (longest.length < word.length) {
      longest = word;
      count = 1;
    } else if (longest.length === word.length) {
      count += 1;
    }
    return longest;
  }, '');
  return count === 1;
}

// Варіант 2 (з використанням функції isOnlyLongest()) - неефективно, адже треба декілька разів застосовувати reduce()

/**
 * Function gets string and finds the longest word in it
 * Uses isOnlyLongest() function
 * @param {string} inputString string to find longest word
 * @returns {string | object} string if the longest word is only one, object if more
 */
function getLongestWord2(inputString) {
  if (isOnlyLongest(inputString)) {
    return inputString
      .split(' ')
      .reduce(
        (longest, word) =>
          longest.length < word.length ? (longest = word) : longest,
        ''
      );
  } else {
    return inputString.split(' ').reduce(
      (longest, word) => {
        if (longest[0].length < word.length) {
          longest.length = 0;
          longest.push(word);
        } else if (longest[0].length === word.length) {
          longest.push(word);
        }
        return longest;
      },
      ['']
    );
  }
}

// Варіант 3 (найкоротший варіант, де longest в будь-якому випадку - масив,
// і лише у випадку єдиного слова - повертається у вигляді рядка)

/**
 * Function gets string and finds the longest word in it
 * @param {string} inputString string to find longest word
 * @returns {string | object} string if the longest word is only one, object if more
 */
function getLongestWord3(inputString) {
  const longestWords = inputString.split(' ').reduce(
    (longest, word) => {
      if (word.length > longest[0].length) {
        return [word];
      }
      if (word.length === longest[0].length) {
        longest.push(word);
      }
      return longest;
    },
    ['']
  );
  if (longestWords.length === 1) {
    return longestWords.join('');
  } else {
    return longestWords;
  }
}

// Приклад використання функцій
const str6 = 'Adipisicing elit'; // Якщо найдовше слово одне
const str7 = 'Lorem ipsum dolor sit amet'; // Якщо найдовших слів декілька

// Варіант 1
console.log(getLongestWord1(str6));
console.log(getLongestWord1(str7));

// Варіант 2
console.log(getLongestWord2(str6));
console.log(getLongestWord2(str7));

// Варіант 3
console.log(getLongestWord3(str6));
console.log(getLongestWord3(str7));
