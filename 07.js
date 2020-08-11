//Запросить у пользователя число и на сколько цифр его сдвинуть. 
//Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let num = +prompt('Введите любое число'),
    numScale = +prompt('На сколько сдвинуть');
let numCount = 0
for (let index = 1;; index *= 10) {
    if (~~(num / index) == 0) break;
    numCount++
}
let resultRight = num % 10 ** (numCount - numScale),
    resultLeft = ~~(num / 10 ** (numCount - numScale));

alert(`${resultRight}${resultLeft}`)