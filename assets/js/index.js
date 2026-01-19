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
