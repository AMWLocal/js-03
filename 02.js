//Запросить 2 числа и найти только наибольший общий делитель.
let num1 = +prompt('Введите первое число'),
    num2 = +prompt('Введите второе число');

let numMin = (num1 < num2) ? num1 : num2;
let numMax = (num1 > num2) ? num1 : num2;
let result = 0;
for (let i = numMax; i >= 1; i--) {
    if (numMin % i == 0 && numMax % i == 0) {
        result = i;
        break;
    }
}
alert(result)