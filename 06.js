//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.
do {
    let num1 = +prompt('Введите первое число'),
        num2 = +prompt('Введите второе число');
    sumbol = prompt('Введите знак ')
    let sum = ''
    switch (sumbol) {
        case '+':
            sum = num1 + num2;
            alert(sum);
            break
        case '-':
            sum = num1 - num2;
            alert(sum);
            break
        case '/':
            sum = num1 / num2;
            alert(sum);
            break
        case '*':
            sum = num1 * num2;
            alert(sum);
            break



    }
} while (confirm("Хотите решить еще пример?"));