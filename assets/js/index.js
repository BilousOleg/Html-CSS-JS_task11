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
