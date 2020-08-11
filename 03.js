//Запросить у пользователя число и вывести все делители этого числа.
let num = +prompt('Введите число');
result = ``
for (let i = 0; i <= num; i++) {
    num % i == 0 ? result += i : `${''}`;

}
alert(result)