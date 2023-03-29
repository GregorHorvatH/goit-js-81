// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock-n-Roll');

// const firstItem = genres[0];
// const lastItem = genres[genres.length - 1];

// console.log(firstItem);
// console.log(lastItem);

// console.log(genres.shift());

// genres.unshift('Country', 'Reggae');

// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const items = values.split(' ');
// const item1 = Number(items[0]);
// const item2 = parseInt(items[1]);
// const area = item1 * item2;

// console.log(area);

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі
// номер_елемента: значення_елемента
// Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// let i = 1;
// for (const fruit of fruits) {
//   console.log(`${i++}: ${fruit}`);
// }

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// // 1. text -> array
// // 2. iterate the array
// // 3. create template text `Jacob: 89001234567`

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// 1. text -> array
// 2. remove first item
// 3. remove last item
// 4. array -> text

// const words = string.split(' ');

// words.shift();
// words.pop();

// const newString = words.join(' ');

// console.log(`"${newString}"`);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future'; // abc -> cba

// 1. text -> array of letters
// 2. reverse the array
// 3. array -> text

// var. 1
// const letters = string.split('');
// const reversedLetters = letters.reverse();
// const reversedString1 = reversedLetters.join('');

// console.log(reversedString1);

// var. 2
// const reversedString2 = string.split('').reverse().join('');

// console.log(reversedString2);

// var. 3
// const letters = string.split('');
// const reversedLetters = [];

// for (const letter of letters) {
//   reversedLetters.unshift(letter);
// }

// const reversedString = reversedLetters.join('');

// console.log(reversedString);

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// console.log(
//   langs.sort(function (a, b) {
//     const letter1 = a[0];
//     const letter2 = b[0];

//     return letter1.localeCompare(letter2);
//   })
// );

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь-якого масиву чисел.
// Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }

//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min);
// console.log(max);

// ---------------- i++ (post increment) vs i += 1 vs ++i (pre increment) ----------------
// let x = 1;

// console.log((x += 1)); // 2
// console.log((x += 1)); // 3
// console.log((x += 1)); // 4
// console.log((x += 1)); // 5
// console.log(x); // 5

// let y = 1;

// console.log(y++); // 1
// console.log(y++); // 2
// console.log(y++); // 3
// console.log(y++); // 4
// console.log(y); // 5

// let q = 1;

// console.log(++q); // 2
// console.log(++q); // 3
// console.log(++q); // 4
// console.log(++q); // 5
// console.log(q); // 5
