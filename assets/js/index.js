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
        '',
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
      [''],
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
    [''],
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
