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
