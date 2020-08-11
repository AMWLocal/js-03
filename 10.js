//10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
//каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя 
//«Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. 
//Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
//Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
// И так до тех пор, пока пользователь не выберет == N.
alert(`Загадай число от 0 до 1000`)

let result;
let resultMin = 0;
let resultMax = 1000

while (true) {
    result = getNewResult(resultMin, resultMax)

    let ans = +prompt(`Число ${result}\n 
        1) > ${result}\n 
        2) < ${result}\n 
        3) = ${result}`)

    if (ans == 3) {
        alert(`Ваше число ${result}`)
        break
    }

    if (ans === 1) {
        resultMin = result
    } else if (ans === 2) {
        resultMax = result
    }

}

function getNewResult(resultMin, resultMax) {
    result = resultMax - ((resultMax - resultMin) / 2);
    return +result.toFixed()
}