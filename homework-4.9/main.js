// задача 1
const firstName = "Серёжка";
const lastName = "Лис";
const isStudent = Boolean(true);

// console.log(typeof isStudent);

// Задача 2

const age = 19;
const currentYear = 2026;
const birthYear = currentYear - age;

// console.log(birthYear);

// Задача 3

let messange = `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`;

// console.log(messange);

// задача 4

// предположу что 123456789false и пробел всё строкой
// ошибся, не посмотрел на то что переменная "е" была булевой, так что в результате "123456789falsetrue"

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

// console.log(result);
