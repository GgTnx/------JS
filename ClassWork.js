
let figura = prompt("Эй, человек) выбери фигуру которую будем мучать? \n 1. Куб\n 2. Паралелепипед\n 3. Прямоугольный параллелепипед\n 4. Призма\n 5. Пирамида\n (для валенков - введи нужную цифру)")
switch(Number(figura)){
            case 1:
               let data = prompt("ТЫ ВЫБРАЛ КУБ\nТеперь выбери что будем считать?\n 1. Объем\n 2.Площадь\n 3.Диагонгаль")
                switch (Number(data)) {
                    case 1: let storona = prompt("Чему равна сторона куба?")
                    if (Number(storona)) {
                        alert(`Объем куба равен ${vKub(Number(storona))}.`);
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    case 2: 

                    break;
                    case 3:

                    break;
                    default: alert("Валенок, введи число от 1го до 3х!!!")
                        
                }
             
            break;
            case 2:
            alert("vibran paralel")
            break;
            case 3:

            break;
            case 4:

            break;
            case 5:

            break;
            default:  alert("Валенок, введи число от 1го до 5ти!!!")
        }
        function vKub(rebro) { // Объем куба
            return Math.pow(rebro,3)
        }
        function sKub(params) { // Площадь куба
            
        }
        function dKub(params) { // Диагональ куба
            
        }
        function name(params) {
            
        }
        



