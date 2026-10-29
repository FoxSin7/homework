// задача 1

// const userInput = prompt(
//   "Введите число которое хотите проверить на делимость:",
// );
// const num = Number(userInput);

// if (isNaN === num) {
//   alert("Вы ввели не число");
// } else if (num % 2 === 0) {
//   alert(`Да, число ${num}, делится на 2`);
// } else {
//   alert(`Нет, число ${num}, не делится на 2`);
// }

// задача 2
// const ageUser = prompt("Введите ваш возраст(числом):");
// const age = Number(ageUser);

// const discount = age < 18 && age > 4 ? "Ваша скидка = 10%" : age > 18 && age <= 65 ? "Ваша скидка = 20%" : age > 65 && age < 110 ? "Ваша скидка = 30%" : "Вас нет в живых)) НУ ИЛИ ПРОСТО ВАМ ОТКАЗАНО В ОБСЛУЖИВАНИИ";
// alert(discount)

// console.log(discount);

// 4*

// switch (true) {
//   case age < 18 && age > 4:
//     console.log("Ваша скидка = 10%");
//     break;
//   case age > 18 && age <= 65:
//     console.log("Ваша скидка = 20%");
//     break;
//   case age > 65 && age < 110:
//     console.log("Ваша скидка = 30%");
//     break;
//   default:
//     console.log("Вас нет в живых)) НУ ИЛИ ПРОСТО ВАМ ОТКАЗАНО В ОБСЛУЖИВАНИИ");
//     break;
// }

// сам не допёр но ии подсказал как можно сделать

// Задание 3

// const userName = prompt("Введите имя пользователя");
// const passwordInput = prompt("Введите пароль пользователя");
// const password = Number(passwordInput);
// const us = "user";
// const ad = "admin";
// const passLog = 123456;

// const data = (userName === us || userName === ad) && password === passLog ? "Доступ разрешен" : "Доступ запрещён";

// alert(data)

// Задание 4

const massInp = prompt("Введите вес посылки(в килограммах от 0.0001):");
const typeInp = prompt(
  `Выберите и введите один из трех доступных типов доставки: "Стандарт" "Экспресс" "Премиум". `,
);

const mass = Number(massInp);
const type = typeInp;

switch (true) {
  case mass > 0.0001:
    console.log("Все окей");
    break;
  default:
    alert("Некорректный вес посылки!");
    break;
}

switch (type) {
  case "Стандарт":
    console.log("Все окей");
    break;
  case "Экспресс":
    console.log("Все окей");
    break;
  case "Премиум":
    console.log("Все окей");
    break;
  default:
    alert("Неверный тип доставки!");
    break;
}

const priseKg = mass <= 1 ? 5 : mass > 1 && mass <= 5 ? 10 : 15;
let coefficient = "" ;


switch (type) {
  case "Стандарт":
    coefficient = 1;
    break;
  case "Экспресс":
    coefficient = 1.5;
    break;
  case "Премиум":
    coefficient = 2;
    break;
  default:
console.log("Босс чёт не то...");
    break;
}

const finalPrise = priseKg * coefficient;

alert(`Итоговая стоимость доставки при том что ваша посылка весит ${mass} килограмм и будет доставлена классом: ${type} будет составлять: ${finalPrise}$`);
