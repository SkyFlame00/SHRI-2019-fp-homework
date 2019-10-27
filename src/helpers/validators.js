/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {replace, length, compose, test, allPass, partial, includes, not, anyPass} from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);

const numLt = condNum => num => num < condNum;

const numGt = condNum => num => num > condNum;

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */

const digitsNumIsGt2 = compose(
  numGt(2),
  getNumbersCount
);

const digitsNumIsLt2 = compose(
  numLt(2),
  getNumbersCount
);

const digitsNumIsGt1 = compose(
  numGt(1),
  getNumbersCount
);

const digitsNumIsGt3 = compose(
  numGt(3),
  getNumbersCount
);

const digitsNumIsGt4 = compose(
  numGt(4),
  getNumbersCount
);

const digitsNumIsLt5 = compose(
  numLt(5),
  getNumbersCount
);

/**
 * Функции для проверки выполнения условий с длиной строки
 */

const strLenIsLt5 = compose(
  numLt(5),
  length
);

const strLenIsGt5 = compose(
  numGt(5),
  length
);

const strLenIsLt10 = compose(
  numLt(10),
  length
);

const strLenIsGt8 = compose(
  numGt(8),
  length
);

const strLenIsLt8 = compose(
  numLt(8),
  length
);

const strLenIsLt4 = compose(
  numLt(4),
  length
);

/**
 * Функции для проверки наличия конкретного символа в строке
 */

const includes4 = partial(includes, [4]);

const includes7 = partial(includes, [7]);

const notIncludes4 = str => !includes4(str);

// 1. Длина < 5 и кол-во цифр > 2 шт.

export const validateFieldN1 = (str) => allPass([strLenIsLt5, digitsNumIsGt2])(str);

// 2. Длина < 5 и кол-во цифр < 2 шт.

export const validateFieldN2 = (str) => allPass([strLenIsLt5, digitsNumIsLt2])(str);

// 3. Длина > 5 или кол-во цифр > 1 шт.

export const validateFieldN3 = (str) => anyPass([strLenIsGt5, digitsNumIsGt1])(str);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"

export const validateFieldN4 = (str) => allPass([strLenIsLt10, digitsNumIsGt2, includes4])(str);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"

export const validateFieldN5 = (str) => allPass([strLenIsLt10, digitsNumIsGt1, notIncludes4])(str);

// 6. Длина > 5, или одна из цифр равна "7"

export const validateFieldN6 = (str) => anyPass([strLenIsGt5, includes7])(str);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ

export const validateFieldN7 = (str) => allPass([strLenIsGt8, digitsNumIsGt3, containsOnlyEng])(str);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"

export const validateFieldN8 = (str) => anyPass([digitsNumIsLt5, containsOnlyEng, includes7])(str);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ

export const validateFieldN9 = (str) => allPass([strLenIsLt8, digitsNumIsGt4, containsOnlyEng])(str);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ

export const validateFieldN10 = (str) => anyPass([strLenIsLt4, digitsNumIsGt2, containsOnlyEng])(str);
