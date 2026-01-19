/**
 * Function gets string and calculates count vowels it includes
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
