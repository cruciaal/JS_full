// for (let i = 1; i <= 5; i++) {
//   console.log(`=> ${i} <=`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} × ${j} = ${i * j}`);
//   }
// }
// =========================================LOOPS==========================
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

for (let i = 1; i <= 5; i++) {
  console.log(`\n=> ${i} <=\n`);
  for (let j = 1; j <= 10; j++) {
    const multiplyResult = j * i;
    console.log(`${i} x ${j} = ${multiplyResult}`);
  }
}

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
// console.log('num++:', num++);
