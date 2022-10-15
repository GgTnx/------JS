
let figura = prompt("Эй, человек) выбери фигуру которую будем мучать? \n 1. Куб\n 2. Параллелепипед\n 3. Прямоугольный параллелепипед\n 4. Призма\n 5. Пирамида\n (для валенков - введи нужную цифру)")
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
                    case 2: let storona2 = prompt("Чему равна сторона куба?")
                    if (Number(storona2)) {
                        alert(`Площадь куба равна ${sKub(Number(storona2))}.`);
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    case 3: let storona3 = prompt("Чему равна сторона куба?")
                    if (Number(storona3)) {
                        alert(`Диагональ куба равна ${dKub(Number(storona3))}.`);
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    default: alert("Валенок, введи число от 1го до 3х!!!")
      
                }
            break;
            case 2:
                let data2 = prompt("ТЫ ВЫБРАЛ ПАРАЛЛЕЛЕПИПЕД\nТеперь выбери что будем считать?\n 1. Объем\n 2.Площадь поверхности\n")
                switch (Number(data2)) {
                    case 1: let dlina = prompt("Чему равна длина параллелепипеда?")
                    let visota = prompt("Чему равна высота параллелепипеда?")
                    let shirina = prompt("Чему равна ширина параллелепипеда?")
                    if (Number(dlina)&&Number(visota)&&Number(shirina)) {
                        alert(`Объем параллелепипеда равен ${vParalelepipeda(Number(dlina),Number(visota),Number(shirina))}.`);
                    } else {
                        alert("Валенок, вводить надо числа!!!")
                    }
                    break;
                    case 2: let dlina2 = prompt("Чему равна длина параллелепипеда?")
                    let visota2 = prompt("Чему равна высота параллелепипеда?")
                    let shirina2 = prompt("Чему равна ширина параллелепипеда?")
                    if (Number(dlina2)&&Number(visota2)&&Number(shirina2)) {
                        alert(`Площадь параллелепипеда равна ${sPoverhnosti(Number(dlina2),Number(visota2),Number(shirina2))}.`);
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    default: alert("Валенок, введи число от 1го до 2х!!!")
            break;
            case 3:

            break;
            case 4:

            break;
            case 5:

            break;
          
        }
        function vKub(rebro) { // Объем куба
            return Math.pow(rebro,3)
        }
        function sKub(rebro) { // Площадь куба
            return 6*Math.pow(rebro,2)
        }
        function dKub(rebro) { // Диагональ куба
            return rebro*Math.sqrt(3)
        }
        function vParalelepipeda(dlina,visota,shirina) {
            return dlina*shirina*visota  
        }
        function sParalelepipeda(dlina,visota,shirina) {
            let P_o = 2*(dlina+shirina)
            let S_b = P_o*visota
            return S_b+2(dlina*shirina)
        }
        function sPoverhnosti(dlina,visota,shirina) {
            let P_o = 2*(dlina+shirina)
            let S_b = P_o*visota
            let S_o = dlina*shirina
            return 2*S_o + S_b

        }
       
        


    }
