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
