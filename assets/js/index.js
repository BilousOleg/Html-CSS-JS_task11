/**
 * Function gets string and checks it for being a palindrome
 * @param {string} inputString string to check
 * @returns {boolean}
 */
function isPalindrom(inputString) {
  // Перевірка на те, чи кожен символ рядка дорівнює символу перегорнутого рядка з цим же індексом,
  return [...inputString].every(
    (char, index, array) => char === array.toReversed()[index],
  );
}

const str4 = 'qwertrewq';
const str5 = 'qwerty';

console.log(isPalindrom(str4));
console.log(isPalindrom(str5));
