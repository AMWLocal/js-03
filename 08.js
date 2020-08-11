//Зациклить вывод дней недели таким образом: «День недели. 
//Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
let day = +prompt('Введите день недели')

do {
    switch (day) {
        case 1:
            alert(`Понедельник`)

            break
        case 2:
            alert(`Вторник`)
            break
        case 3:
            alert(`Среда`)
            break
        case 4:
            alert(`Четверг`)
            break
        case 5:
            alert(`Пятница`)
            break
        case 6:
            alert(`Суббота`)
            break
        case 7:
            alert(`Воскресенье`)
            break

    }
    if (day == 7) {
        day = 1
    } else {
        day++
    }

} while (
    confirm("Хотите узнать след. день?")
)