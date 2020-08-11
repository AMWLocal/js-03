//Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
let num1 = +prompt('Введите первое число'),
    num2 = +prompt('Введите второе число');

let numMin = (num1 < num2) ? num1 : num2;
let numMax = (num1 > num2) ? num1 : num2;
let result = 0

for (let i = numMin; i <= numMax; i++) {
    result = i + result
}
alert(result)