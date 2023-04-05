// =================================Unit Test===========================================

// =================================Strings===========================================
// function cleanTransactionsList(arr) {
//   return arr.reduce((accum, el) => {
//     if (!isNaN(+el)) {
//       const dollar = '$' + (+el).toFixed(2);
//       accum.push(dollar);
//     }
//     return accum;
//   }, []);
// }
// function cleanTransactionsList(arr) {
//   return arr.map((el) => {
//     const readyElement = el
//       .toString()
//       // .replace(/[a-zA-Z]/g, '')
//       .trim();
//     return '$' + (+readyElement).toFixed(2);
//   });
// }

// const transactionArray = [' 1.9 ', '16.4', 17, ' 1 dollar '];
// console.log(cleanTransactionsList(transactionArray));
// function reverseString(string) {
//   if (typeof string !== 'string') {
//     return null;
//   }
//   let result = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
//   return result;
// }
// const string = 'my favourite game';
// console.log(reverseString(string));

// const calc = (expression) => {
//   const [a, operator, b] = expression.split(' ');
//   let result;
//   switch (operator) {
//     case '+':
//       result = +a + +b;
//       break;
//     case '-':
//       result = a - b;
//       break;
//     case '*':
//       result = a * b;
//       break;
//     case '/':
//       result = a / b;
//       break;
//   }
//   return `${expression} = ${result} `;
// };
// console.log(calc('11 * 22'));

// function splitString(str, len = 10) {
//   if (typeof str !== 'string' || typeof len !== 'number' || len <= 0) {
//     return null;
//   }

//   const substrings = [];

//   for (let i = 0; i < str.length; i += len) {
//     const substring = str.substr(i, len);
//     substrings.push(substring);
//   }

//   const lastSubstring = substrings[substrings.length - 1];
//   if (lastSubstring.length < len) {
//     substrings[substrings.length - 1] = lastSubstring.padEnd(len, '.');
//   }

//   return substrings;
// }

// function sortContacts(arr, isAsc = true) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const sortedArr = arr.sort((a, b) => a.name.localeCompare(b.name));
//   return isAsc ? sortedArr : sortedArr.reverse();
// }

// function sortContacts(arr, isAsc) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   if (isAsc === true) {
//     const result = arr.sort((a, b) => {
//       return a.name.localeCompare(b.name);
//     });
//     return result;
//   }
// }
// const contacts = [
//   { name: 'Aleh', phone: '099453456' },
//   { name: 'Olena', phone: '0329453456' },
//   { name: 'Ihor', phone: '000053456' },
//   { name: 'Yorik', phone: '0529453456' },
// ];
// console.log(sortContacts(contacts, true));

// console.log('VAnna'.charCodeAt(1));

// function splitText(string, number = 10) {
//   if (typeof string !== 'string') {
//     return null;
//   }
//   const chunks = [];
//   for (let i = 0; i < string.length; i += number) {
//     chunks.push(string.substring(i, i + number));
//   }
//   const formattedChunks = chunks.map(
//     (el) => el.charAt(0).toUpperCase() + el.slice(1)
//   );
//   return formattedChunks.join('\n');
// }
// console.log(splitText('abcdefgasfsafafa'));

// console.log('koshka hvost oblez'.lastIndexOf('hvost'));
// =================================Numbers===========================================
// const superRound = (num, prec) => {
//   const roundedNums = [];

//   const factor = Math.pow(10, prec);

//   roundedNums.push(Math.floor(num * factor) / factor);
//   roundedNums.push(Math.trunc(num * factor) / factor);
//   roundedNums.push(Math.ceil(num * factor) / factor);
//   roundedNums.push(Math.round(num * factor) / factor);
//   roundedNums.push(parseFloat(num.toFixed(prec)));

//   return roundedNums;
// };
// console.log(superRound(11.12556, 5));

// const getRandomNumbers = (length, from, to) => {
//   const min = Math.ceil(from);
//   const max = Math.ceil(to);

//   if (from > to || max === min) {
//     return null;
//   }

//   return new Array(length)
//     .fill()
//     .map(() => Math.floor(Math.random() * (max - min) + min));
// };

// const getRandomNumbers = (length, from, to) => {
//   if (from > to || Math.ceil(from) >= Math.floor(to)) {
//     return null;
//   }
//   const newFrom = Math.ceil(from);
//   const newTo = Math.floor(to);
//   return new Array(length)
//     .fill()
//     .map(() => Math.floor(Math.random() * (newTo - newFrom)) + newFrom);
// return new Array(length)
//   .fill()
//   .map((el) => el(Math.random() * (to - from) + from));
// let gap = Math.floor(Math.random() * (to - from)) + from;
// let result = new Array(length).fill().map(gap);
// return result;
// };
// console.log(getRandomNumbers(3, 3.99, 4.54));
// const getTotalPrice = (arr) =>
//   '$' + Math.floor(arr.reduce((acc, current) => acc + current) * 100) / 100;

// const dollarSum = [1.11, 2.34, 3.44, 5.124123421342134];
// console.log(getTotalPrice(dollarSum));
// const getMaxAbsoluteNumber = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }
//   return Math.max(...arr.map((el) => Math.abs(el)));
// };

// console.log(getMaxAbsoluteNumber([]));
// =================================MultiRound===========================================
// const multiRound = (num) => [
//   Math.floor(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   Number(num.toFixed(2)),
// ];

// console.log(multiRound(11.12556));

// =================================parse===========================================
// const getParsedIntegers = (arr) =>
//   arr.map((element) => Number.parseInt(element));
// const getParsedIntegersV2 = (arr) => arr.map((element) => parseInt(element));
// const getParsedFloats = (arr) =>
//   arr.map((element) => Number.parseFloat(element));
// const getParsedFloatsV2 = (arr) => arr.map((element) => parseFloat(element));

// const parseNumbers = [1, 22.34, ' 42.38', 'eleven', 14, 8.32];

// console.log(getParsedFloatsV2(parseNumbers));
// const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
// const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
// const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));
// const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));
// const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));

// const isFiniteNumbers = [1, 3.33, 1 / 0, undefined, NaN, '10'];

// console.log(getIntegers(isFiniteNumbers));
// const num = 67;
// console.log(Number.isNaN(num));
// =================================Arrays===========================================

// const maxNumber = (arr) => {
//   let max = -Infinity;
//   arr.forEach((element) => {
//     if (Math.abs(element) > max) {
//       max = Math.abs(element);
//     }
//   });
//   return max;
// };

// const maxNumber = (arr) => {
//   const absoluteValues = arr.map((huy) => Math.abs(huy));
//   // console.log(absoluteValues);
//   const max = Math.max(...absoluteValues);
//   console.log(max);
// };

// console.log(maxNumber([2, 6, -44, 78, -99]));

// const getTotalRevenue = (transactions) =>
//   transactions
//     .map((babki) => babki.amount)
//     .reduce((accumulator, currentValue) => accumulator + currentValue);

// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// const result = getTotalRevenue(dayTransactions);
// console.log(result);
// const getPeople = (obj) => {
//   const arrNames = Object.values(obj)
//     .flat()
//     .map((her) => her.name);
//   return arrNames;
// };
// eslint-disable-next-line max-len
// В этом примере мы используем метод Object.values() для получения всех значений объекта rooms, затем применяем метод flat() для объединения массивов в один и, наконец, используем метод map() для получения списка имен.

// const rooms = {
//   room1: [
//     { name: 'Jack' },
//     { name: 'Black' },
//     { name: 'Her' },
//     { name: 'Gavno' },
//   ],
//   room321: [{ name: 'Afina' }, { name: 'Denny' }],
// };
// console.log(getPeople(rooms));
// function mergeObjectsV2(obj1, obj2) {
//   const merged = Object.assign(obj2, obj1);
//   return merged;
// }
// function mergeObjectsV3(obj1, obj2) {
//   return { ...obj2, ...obj1 };
// }

// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };
// console.log(mergeObjectsV3(obj1, obj2));

// function addPropertyV1(userData, userId) {
//   userData.huy = userId;
//   return userData;
// }

// function addPropertyV1(userData, userId) {
//   user.id = userId;
//   return user;
// }

// const user = {
//   name: 'Sam',
// };

// function addPropertyV2(userData, userId) {
//   Object.assign(userData, { huy: userId });
//   return userData;
// }
// console.log(addPropertyV2(user, '1234567'));

// function addPropertyV3(userData, userId) {
//   const updatedUserData = Object.assign({}, userData, { id: userId });
//   return updatedUserData;
// }

// function addPropertyV4(userData, userId) {
//   const updatedUserData = { ...userData, id: userId };
//   return updatedUserData;
// }
// const user = {
//   name: 'Sam',
// };
// console.log(addPropertyV1(user, '1234567'));
// ==> { name: 'Sam', id: '1234567' }

// function getKeys(obj) {
//   const result = Object.keys(obj);
//   result.forEach((key) => console.log(key));
// }
// eslint-disable-next-line max-len
// Эта функция использует метод Object.keys() для получения массива всех ключей объекта. Затем метод forEach() вызывается на этом массиве, чтобы перебрать каждый ключ и вывести его в консоль. Этот подход более явный и предсказуемый, чем использование цикла for-in, потому что он гарантирует, что ключи будут выведены в порядке, соответствующем порядку элементов в массиве ключей.

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// const player = {
//   John: 19,
//   Tom: 22,
//   Bob: 12,
// };

// const copyObj = (obj) => Object.assign({}, obj);
// console.log(copyObj(player));

// const object = { John: 19, Tom: 22, Bob: 12 };

// const getAdults = (obj) => {
//   const arr = Object.entries(obj);
//   const filtredArr = arr.filter((huy) => huy[1] >= 18);
//   const adults = filtredArr.map((huy) => huy[0]);
//   return adults;
// };

// const getAdults = (obj) => {
//   const result = Object.entries(obj)
//     .filter((huy) => huy[1] >= 18)
//     .map((huy) => huy[0]);
//   return result;
// };

// const getAdults = (obj) =>
//   Object.entries(obj)
//     .filter((huy) => huy[1] >= 18)
//     .map((huy) => huy[0]);

// console.log(getAdults(object));

// const concatProps = (obj) => {
//   const result = [];
//   for (let key in obj) {
//     result.push(obj[key]);
//   }
//   return result;
// };

// const transformToObject = (arr) => {
//   const obj = {};
//   arr.forEach((el) => {
//     obj[el] = el;
//   });
//   return obj;
// };
// console.log(transformToObject(['a', 17.1, 'John Doe']));

// const getAdults = (obj) => {
//   const result = {};
//   for (let key in obj) {
//     if (obj[key].age >= 18) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };
// const getAdults = (obj) => {
//   const adults = {};
//   for (let key in obj) {
//     if (obj[key] >= 18) {
//       adults[key] = obj[key];
//     }
//   }
//   return adults;
// };

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// const pickProps = (obj, props) => {
//   const result = {};
//   for (let key in obj) {
//     if (props.includes(key)) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// const user = {
//   name: 'Tom',
//   age: 17,
// };

// function getKeys(obj) {
//   for (let value in obj) {
//     console.log(value);
//   }
// }
// console.log(getKeys(user));
// console.log(getKeys(user));

// const user = {
//   name: 'Tom',
//   age: 17,
// };
// user.hobby = 'football';

// const anotherKey = 'married';
// user[anotherKey] = false;
// user['favorite music'] = 'rock';
// user.address = {};
// user.address.country = 'Ukraine';
// user.address.building = 17;
// console.log(user);

/* eslint-disable dot-notation */
// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };
// console.log(transaction.currency);
// console.log(transaction['value']);
// const key = 'operation';
// console.log(transaction[key]);
// console.log(transaction['agent']['company']);
// console.log(transaction.agent.country);
// console.log(transaction['operation time']);

// function sum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((total, acc) => total + acc) / arr.length;
// }
// console.log(sum([2, 5, 6, 3]));

// function filterNames(arr, text) {
//   return arr.filter((name) => name.includes(text) && name.length > 5);
// }
// const names = ['John', 'Olivya', 'Emanuel', 'Anya'];
// console.log(filterNames(names, 'ya'));

// function sum(arr) {
// if (!Array.isArray(arr)) {
//   return null;
// }
//   return arr.reduce((total, currentValue) => {
//     return total + currentValue;
//   });
// }
// console.log(sum([1, 2, 3, 4]));
// const withdraw = (clients, balances, client, amount) => {
//   const i = clients.indexOf(client);
//   if (balances[i] < amount) {
//     return -1;
//   }
//   balances[i] -= amount;
//   return balances[i];
//   const indexOfClient = clients.indexOf(client);
//   return amount > balances[indexOfClient]
//     ? -1
//     : balances[indexOfClient] - amount;
// };

// function withdraw(clients, balances, client, amount) {
//   const index = clients.indexOf(client);
//   if (balances[index] < amount) {
//     return -1;
//   }
//   balances[index] -= amount;
//   return balances[index];
// }
// let clients = ['Ann', 'John', 'User'];
// let balances = [1400, 87, -6];

// console.log(withdraw(clients, balances, 'John', 20));

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// function cloneArr(arr) {
// if (!Array.isArray(arr)) {
//   return null;
// }
//   const copiedArray = [...arr];
//   return copiedArray;
// }

// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map(function (num) {
//     if (num % 2 === 0) {
//       return num + delta;
//     }
//     return num;
//   });
// }

// console.log(increaseEvenEl([1, 2, 4, 6, 8, 10], 10));

// function squareArray(arr) {
// if (!Array.isArray(arr)) {
//   return null;
// }
//   const square = arr.map((num) => num ** 2);
//   return square;
// }

// const reverseArray = (array) => {
// if (!Array.isArray(array)) {
//   return null;
// }
//   const copiedArray = [...array];
//   return copiedArray.reverse();
// };
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(reverseArray(allStudTest1));
// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const allStudents = allStudentsList.filter(
//     (name) => !studentsForRetake.includes(name)
//   );
//   const message = allStudents.map((name) => 'Good job ' + name);
//   return message;
// };

// examples
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2));
// getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []

// const flatArray = (arr) => {
//   // const clonedArr = [...arr];
//   function compare(a, b) {
//     if (a > b) {
//       return 1;
//     }
//     return -1;
//   }
//   const flat = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flat.sort(compare);
// };

// const initArray = [[21, 3], 4, 6, [1, 3, [3, 5, 7, 8], 1, 4, 5, 5]];
// console.log(flatArray(initArray));

// const numbers = [2, 3, 5, 7, 4];
// console.log(numbers.sort());
// const sortDesc = (numbers) => {
//   numbers.sort((a, b) => a - b);
// }

// const sortDesc = (numbers) => {
//   const copyNumbers = [...numbers];
//   function compare(a, b) {
//     if (a < b) {
//       return 1;
//     }
//     return -1;
//   }
//   copyNumbers.sort(compare);
//   return copyNumbers;
// };
// const arr = [1, 3, 5, 66, 44, 22, 11];
// console.log(sortDesc.slice(arr));

// const getSpecialNumbers = (numbers) => {
//   const specialNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i]);
//     }
//   }
//   return specialNumbers;
// };
// console.log(getSpecialNumbers([1, 3, 6, 4, 12]));

// const includes = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// };

// const uniqueCount = (array) => {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const unique = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (!includes(unique, array[i])) {
//       unique += 1;
//     }
//   }
//   return unique;
// };
// console.log(uniqueCount([1, 2, 4, 6, 5, 5, 2, 2]));

// const includes = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// };

// const removeDuplicates = (array) => {
// if (!Array.isArray(array)) {
//   return null;
// }
//   const noDuplicates = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!includes(noDuplicates, array[i])) {
//       noDuplicates.push(array[i]);
//     }
//   }
//   return noDuplicates;
// };
// console.log(removeDuplicates([1, 2, 4, 6, 5, 5, 2, 2]));

// console.log({ ...new Set([1, 2, 4, 6, 5, 5, 2, 2]) });

// const includes = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//   }
//   return false;
// };

// const getSubArray = (arr, numberOfElements) => {
//   const subArray = [];
//   for (let i = 0; i < numberOfElements; i++) {
//     subArray[i] = arr[i];
//     if (subArray.includes(arr[i])) return true;
//   }
//   return subArray;
// };
// console.log(getSubArray([11, 12, 15, 6, 7, 99], 4));

// function withdraw(clients, balances, client, amount) {
//   const index = clients.indexOf(client);
//   if (balances[index] < amount) {
//     return -1;
//   }
//   balances[index] -= amount;
//   return balances[index];
// }
// let clients = ['Ann', 'John', 'User'];
// let balances = [1400, 87, -6];

// console.log(withdraw(clients, balances, 'Ann', 1500));

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   {
//     let len = array.length;
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - 1; j++) {
//         if (array[j] > array[j + 1]) {
//           let tmp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = tmp;
//         }
//       }
//     }
//     return array;
//   }

//   function sortDesc(array) {
//     if (!Array.isArray(array)) {
//       return null;
//     }
//     {
//       let len = array.length;
//       for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1; j++) {
//           if (array[j] < array[j + 1]) {
//             let tmp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = tmp;
//           }
//         }
//       }
//       return array;
//     }

// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let sum = max + min;
//   if (sum > 1000) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ====================================??????????????================
// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (Math.max(arr[i]) + Math.min(arr[i]) > 1000) return true;
//   }
// }
// ====================================??????????????================

// console.log(checker([1200, 2]));
// =============clone==============
// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const clonedArr = arr.slice();
//   return clonedArr;
// }
// console.log(cloneArr(2, 4, 6));

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const reversedArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }

//   return reversedArr;
// }

// console.log(reverseArray(5, 4, 3, 2));

// javascript
// Copy code
// const increaseEvenEl = (arr, delta) => {
//   const resultArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       resultArr.push(arr[i] + delta);
//     } else {
//       resultArr.push(arr[i]);
//     }
//   }

//   return resultArr;
// };
// eslint-disable-next-line max-len
// Здесь функция создает пустой массив resultArr. Затем она перебирает каждый элемент массива arr. Если элемент четный, то значение увеличивается на delta и добавляется в новый массив resultArr. Если элемент нечетный, то он добавляется в массив без изменений. В конце функция возвращает новый массив resultArr, который содержит измененные элементы, не затрагивая при этом входящий массив arr.

// Пример использования:

// javascript
// Copy code
// const arr = [1, 2, 3, 4, 5, 6];
// const delta = 2;

// const increasedArr = increaseEvenEl(arr, delta);
// console.log(increasedArr); // [1, 4, 3, 6, 5, 8]
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// eslint-disable-next-line max-len
// Здесь функция increaseEvenEl принимает массив [1, 2, 3, 4, 5, 6] и значение delta равное 2. Функция создает новый массив, изменяет четные элементы и возвращает его. Измененный массив [1, 4, 3, 6, 5, 8] сохраняется в переменную increasedArr, а входящий массив [1, 2, 3, 4, 5, 6] остается без изменений и выводится в консоль.

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push = arr[i] + delta;
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// console.log(increaseEvenEl([1, 3, 4], 20));

// const checkSum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum > 100;
// };
// let arr = [10, 10, 25];
// console.log(checkSum(arr));

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] ** 2);
//   }
//   return newArr;
// }
// console.log(squareArray([1, 10, 9, 11]));

// function createEmptyArray(len) {
//   return Array(len);
// }

// function swap(numbers) {
//   const [from, ...to] = numbers;
//   return [...to, from];
// }
// console.log(swap([0, 1, 2, 3, 4, 5]));

// function swapManual(numbers) {
//   const newArr = [];
//   for (let i = 1; i < numbers.length; i++) {
//     newArr.push(numbers[i]);
//   }
//   newArr.push(numbers[0]);
//   return newArr;
// }
// console.log(swapManual([3, 5, 7, 8]));

// function moveFirstToLast(arr) {
//   let first = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr[arr.length - 1] = first;
//   return arr;
// }

// function getSpecialNumbers(start, end) {
//   const specialNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 3 === 0) {
//       specialNumbers.push(i);
//     }
//   }
//   return specialNumbers;
// }

// function getSpecialNumbers(from, to) {
//   let num = 0;
//   for (let i = from; i <= to; i++) {
//     num += i;
//     if (num % 3 === 0) {
//       return 'super';
//     }
//   }
// }
// console.log(getSpecialNumbers(1, 2));

// function getSum(arr) {
//   let sum = 0;
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(getSum(1, 10, -10, 4));

// function getArrayBounds(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return [arr.length, arr[0], arr[arr.length - 1]];
// }
// getArrayBounds([1, 10, 9, 11]);
// console.log(getArrayBounds([1, 10, 9, 11]));
// console.log(getArrayBounds(1, 2, 3));

// =================================loops===========================================

// function findDivCount(a, b, n) {
//   let num = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % n === 0) {
//       num++;
//     }
//   }
//   return num;
// }
// console.log(findDivCount(2, 6, 2));

// function findDivCount(a, b, n) {
//   let count = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % n === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findDivCount(10, 16, 2));

// function sum(from, to) {
//   let res = 0;

//   for (let num = from; num <= to; num += 1) {
//     res += num;
//   }
//   console.log(res);
//   return res;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
// }

// function sum(from, to) {
//   let num = 0;
//   for (let i = from; i <= to; i++) {
//     num += i;
//   }
//   return num;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   const sum1 = (firstFrom, firstTo);
//   const sum2 = (secondFrom, secondTo);
//   if (sum1 > sum2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(compareSums(5, 10, 5, 10));

// function increaser(a, index) {
//   if (a > index) {
//     return (a += index);
//   } else return a;
// }
// console.log(increaser(7, 4));

// function getPrimes(num) {
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }
// getPrimes(20);

// function getSum(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) sum += i;
//   }
//   return sum;
// }
// console.log(getSum(1, 14));

// function square(num) {
//   return num * num;
// }
// console.log(square(4));
// function getEvenOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   } else return 'odd';
// }
// console.log(getEvenOdd(7));

// function sayHi(name = 'Tom') {
//   console.log(`Hi, ${name}`);
// }
// sayHi();

// =========================================LOOPS==========================
// for (let i = 1; i <= 5; i++) {
//   console.log(`=> ${i} <=`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} × ${j} = ${i * j}`);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//   sum += i;
// }
// const div = Math.floor(sum / 1234);
// const mod = sum % 1234;
// console.log(div > mod);

// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//   sum += i;
// }
// const div = Math.floor(sum / 1234);
// const mod = sum % 1234;
// const result = div > mod ? 'true' : 'false';
// console.log(result);

// const result = Math.floor(sum / 1234);
// const resultMod = sum % 1234;
// console.log(resultMod);
// console.log(sum);
// console.log(result);

// console.log(result);
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 10000000; i++) {
//   sum += i;
// }
// console.log(sum);

// let start = 1;
// let end = 100;
// let result = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   } else if (i % 2 === 0 && i % 4 !== 0) {
//     result += i;
//   } else if (i % 3 === 0) {
//     result -= i;
//   } else if (i % 4 === 0) {
//     result *= i;
//   }
// }
// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 === 1) {
//     console.log('Found');
//     sum += i;
//     // console.log(i);
//   }
// }
// if (sum * 5 > 5000) {
//   console.log('Bigger');
// } else {
//   console.log('Smaller or equal');
// }

// const n = 7;
// for (let i = 1; i <= n; i++) {
//   sum += i.toString();
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//   console.log('\n=>' + i + '<=\n\n');
//   for (let j = 1; j <= 5; j++) {
//     console.log(i + ' x ' + j + ' = ' + i * j);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`\n=> ${i} <=\n`);
//   for (let j = 1; j <= 10; j++) {
//     const multiplyResult = j * i;
//     console.log(`${i} x ${j} = ${multiplyResult}`);
//   }
// }

// const m = 10;
// const n = 20;
// let result = 1;
// let i = m;
// do {
//   if (i % 2 === 1) {
//     result *= i;
//   }
//   i++;
// } while (i <= n);
// console.log(result);

// const n = 110;
// let sum = 0;
// let i = 0;
// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log('Result: ' + sum);

// const n = 2;
// let sum = 0;
// let i = 0;
// while (i <= n) {
//   sum += i;
//   i++;
// }
// console.log(sum);

/* Этот код менять не нужно */
// const defaultUserName = 'anonymus';
// const userName = 'John';
// const anotherUser = null;
// const isAdmin = false;
// const message = 'text';
// const anotherMessage = 'text as well';
// const isLoggedIn = Boolean(userName);
// console.log(isLoggedIn);

/* Раскоментируй код ниже, используя правильные операторы после знака присваивания */

// const activeUser = anotherUser || defaultUserName;
// const hasAccess = isAdmin || isLoggedIn;
// const isTruthy = message < anotherMessage;
// const isFalsy = !isLoggedIn;
// const isNotTrue = typeof message === 'number';
// const isTrue = typeof message !== 'boolean';
// console.log(isTrue);

// if (true) console.log("I'm in");

// if (false) {
//   console.log("I'm not in");
// }

// if ('text') {
//   console.log('Yes');
// }

// if (null) {
//   console.log('Yes');
// } else {
//   console.log('Else');
// }

// // create age variable here
// const age = 21;

// if (age < 16) {
//   console.log('Too young');
// } else if (age >= 16 && age < 18) {
//   console.log('Almost ready');
// } else if (age >= 18 && age < 65) {
//   console.log('Ready');
// } else {
//   console.log('Else');
// }

// Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

// create amount variable here

// const amount = 16;

// const result = amount > 17 ? 'full' : 'empty';
// console.log(result);

/* оператор || (OR) */
// false || true;
// console.log('false || true:', false || true);
// false || true || false;
// console.log('false || true || false:', false || true || false);
// false || false || false;
// console.log('false || false || false:', false || false || false);

/* оператор && (AND) */
// false && true;
// console.log('false && true:', false && true);
// false && true && false;
// console.log('false && true && false:', false && true && false);
// true && true && true;
// console.log('true && true && true:', true && true && true);

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
// 'text' || false;
// console.log("'text' || false:", 'text' || false);
// true || 'text';
// console.log("true || 'text':", true || 'text');
// undefined || null || 0 || '' || null;
// console.log(
//   "undefined || null || 0 || '' || null:",
//   undefined || null || 0 || '' || null
// );

// const customAmount = null; // не выводим
// const defaultAmount = 17; // не выводим
// eslint-disable-next-line max-len
// const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
// console.log('amount:', amount);

/* && находит первое ложное значение */

// 'text' && false;
// console.log("'text' && false:", 'text' && false);
// true && 'text';
// console.log("true && 'text':", true && 'text');
// undefined && null && 0 && '' && null;
// console.log(
//   "undefined && null && 0 && '' && null:",
//   undefined && null && 0 && '' && null
// );

/* оператор отрицания (OR) */
// !true;
// console.log('!true:', !true);
// !false;
// console.log('!false:', !false);
// !'text';
// console.log("!'text':", !'text');
// !!'text';
// console.log("!!'text':", !!'text');

/* Результатом сравнения является булевое значение */

/* Сравнение чисел */

// const a = 17;
// const b = 5;
// a > b;
// a <= b;
// a == b;
// a != b;

// console.log('a > b:', a > b);
// console.log('a <= b:', a <= b);
// console.log('a == b:', a == b);
// console.log('a != b:', a != b);

/* Сравнение строк */

// 'a' < 'b';
// 'ab' > 'a';
// console.log("'a' < 'b':", 'a' < 'b');
// console.log("'ab' > 'a':", 'ab' > 'a');

/* При сравнении переменных разных типов они преобразуются в числа */

// '17' > 1;
// console.log("'17' > 1:", '17' > 1);

/* Строгое сравнение */

// 17 === 1;
// console.log('17 === 1:', 17 === 1);
// 17 === 17;
// console.log('17 === 17:', 17 === 17);
// 17 === '17';
// console.log("17 === '17':", 17 === '17');
// 17 === true;
// console.log('17 === true:', 17 === true);
// '0' === '';
// console.log("'0' === '':", '0' === '');
// true === false;
// console.log('true === false:', true === false);
// true === true;
// console.log('true === true:', true === true);

// null === undefined;
// console.log('null === undefined:', null === undefined);

// false === 0;
// console.log('false === 0:', false === 0);

/* Нестрогое сравнение */

// 17 == '17';
// console.log("17 == '17':", 17 == '17');
// '0' == '';
// console.log("'0' == '':", '0' == '');
// 0 == '';
// console.log("0 == '':", 0 == '');

// null == undefined;
// console.log('null == undefined:', null == undefined);
// false == 0;
// console.log('false == 0:', false == 0);

/* Осторожно c null и undefined */
// undefined == null;
// console.log('undefined == null:', undefined == null);
// undefined == 0;
// console.log('undefined == 0:', undefined == 0);
// null == 0;
// console.log('null == 0:', null == 0);
// undefined < 0;
// console.log('undefined < 0:', undefined < 0);
// undefined > 0;
// console.log('undefined > 0:', undefined > 0);

// Унарный плюс приводит операнд к числу
// +17;
// +'77';
// console.log('+17:', +17);
// console.log("+'77':", +77);

// Бинарный плюс складывает строки или прибавляет числа
// 10 + '5';
// 'some' + 'text';
// console.log("10 + '5':", 10 + '5');
// console.log("'some' + 'text':", 'some' + 'text');

// Математические операции с undefined возвращают NaN
// undefined + 1;
// null + 8;
// undefined + '5';
// 7 - null;
// 5 - undefined;
// 'text' + null;
// console.log('undefined + 1:', undefined + 1);
// console.log('null + 8:', null + 8);
// console.log("undefined + '5':", undefined + '5');
// console.log('7 - null:', 7 - null);
// console.log('5 - undefined:', 5 - undefined);
// console.log("'text' + null:", 'text' + null);

// Постфиксная и префиксная форма записи

// математические операторы приводят операнды к числам
// const a = 17;
// const b = -a;
// '24' / 4;
// 18 * '3';
// '9' - '3';
// 'seventeen' / 3;
// 4 * 'four';
// 17 / 0;

// console.log("'24' / 4:", '24' / 4);
// console.log("18 * '3':", 18 * '3');
// console.log("'9' - '3':", '9' - '3');
// console.log("'seventeen' / 3:", 'seventeen' / 3);
// console.log("4 * 'four':", 4 * 'four');
// console.log('17 / 0:', 17 / 0);

// 10 + 'seven';
// undefined + 1;
// null + 8;
// undefined + '5';
// 'text' + null;

// console.log("10 + 'seven':", 10 + 'seven');
// console.log('undefined + 1:', undefined + 1);
// console.log('null + 8:', null + 8);
// console.log("undefined + '5':", undefined + '5');
// console.log("'text' + null:", 'text' + null);

// const a = 4;
// const b = 2;

// console.log('a:', a);
// console.log('b:', typeof b);
// console.log('a - b =', a - b);
// console.log('a + b =', a + b);
// console.log('a / b =', a / b);
// console.log('a * b =', a * b);
// let num = 17;
// ++num;
// console.log('++num:', num);
// num++;
