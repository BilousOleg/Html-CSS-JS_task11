// Варіант 1 (Через перезапис та перетворення рядка на масив і навпаки у потрібному випадку)

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
