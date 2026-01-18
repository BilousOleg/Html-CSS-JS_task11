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
