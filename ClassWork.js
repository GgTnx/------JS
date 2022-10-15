
let figura = prompt("Эй, человек) выбери фигуру которую будем мучать? \n 1. Куб\n 2. Параллелепипед.\n 3. Прямоугольный параллелепипед.\n 4. Призма.\n 5. Пирамида.\n (для валенков - введи нужную цифру).")
switch(Number(figura)){
            case 1:
               let data = prompt("ТЫ ВЫБРАЛ КУБ!\nТеперь выбери что будем считать?\n 1. Объем.\n 2.Площадь.\n 3.Диагонгаль.")
                switch (Number(data)) {
                    case 1: let storona = prompt("Чему равна сторона куба?")
                    if (Number(storona)) {
                        alert(`Объем куба равен ${vKub(Number(storona))}.`)
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    case 2: let storona2 = prompt("Чему равна сторона куба?")
                    if (Number(storona2)) {
                        alert(`Площадь куба равна ${sKub(Number(storona2))}.`)
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    case 3: let storona3 = prompt("Чему равна сторона куба?")
                    if (Number(storona3)) {
                        alert(`Диагональ куба равна ${dKub(Number(storona3))}.`)
                    } else {
                        alert("Валенок, введи число!!!")
                    }
                    break;
                    default: alert("Валенок, введи число от 1го до 3х!!!")
      
                }
            
            case 2:
                let data2 = prompt("ТЫ ВЫБРАЛ ПАРАЛЛЕЛЕПИПЕД!\nТеперь выбери что будем считать?\n 1. Объем.\n 2.Площадь поверхности.")
                switch (Number(data2)) {
                    case 1: let dlina = prompt("Чему равна длина параллелепипеда?")
                    let visota = prompt("Чему равна высота параллелепипеда?")
                    let shirina = prompt("Чему равна ширина параллелепипеда?")
                    if (Number(dlina)&&Number(visota)&&Number(shirina)) {
                        alert(`Объем параллелепипеда равен ${vParalelepipeda(Number(dlina),Number(visota),Number(shirina))}.`)
                    } else {
                        alert("Валенок, вводить надо числа!!!")
                    }
                    break;
                    case 2: let dlina2 = prompt("Чему равна длина параллелепипеда?")
                    let visota2 = prompt("Чему равна высота параллелепипеда?")
                    let shirina2 = prompt("Чему равна ширина параллелепипеда?")
                    if (Number(dlina2)&&Number(visota2)&&Number(shirina2)) {
                        alert(`Площадь параллелепипеда равна ${sPoverhnosti(Number(dlina2),Number(visota2),Number(shirina2))}.`)
                    } else {
                        alert("Валенок, вводить надо числа!!!")
                    }
                    break;
                    default: alert("Валенок, введи число от 1го до 2х!!!")
                }
            case 3:
                console.log("popal")
            let data3 = prompt("ТЫ ВЫБРАЛ ПРЯМОУГОЛЬНЫЙ ПАРАЛЛЕЛЕПИПЕД!\nТеперь выбери что будем считать?\n 1. Объем.\n 2.Площадь.\n 3.Диагонгаль.")
            switch (Number(data3)) {
                case 1: let dlina = prompt("Чему равна длина параллелепипеда?")
                let visota = prompt("Чему равна высота параллелепипеда?")
                let shirina = prompt("Чему равна ширина параллелепипеда?") 
                if (Number(dlina)&&Number(visota)&&Number(shirina)) {
                    alert(`Объем прямоугольного параллелепипеда равен ${vPrPapalelepiped(Number(dlina),Number(visota),Number(shirina))}.`)
                } else {
                    alert("Валенок, вводить надо числа!!!")
                }
                break;
                case 2: let dlina2 = prompt("Чему равна длина параллелепипеда?")
                let visota2= prompt("Чему равна высота параллелепипеда?")
                let shirina2 = prompt("Чему равна ширина параллелепипеда?") 
                if (Number(dlina2)&&Number(visota2)&&Number(shirina2)) {
                    alert(`Площадь прямоугольного параллелепипеда равна ${sPrPapalelepiped(Number(dlina2),Number(visota2),Number(shirina2))}.`)
                } else {
                    alert("Валенок, вводить надо числа!!!");
                }
                break;
                case 3:
                 let dlina3 = prompt("Чему равна длина параллелепипеда?")
                let visota3= prompt("Чему равна высота параллелепипеда?")
                let shirina3 = prompt("Чему равна ширина параллелепипеда?")
                if (Number(dlina3)&&Number(visota3)&&Number(shirina3)) {
                    alert(`Диагональ прямоугольного параллелепипеда равна ${dPrPapalelepiped(Number(dlina3),Number(visota3),Number(shirina3))}.`)
                } else {
                    alert("Валенок, вводить надо числа!!!")
                }
                break;
                default: alert("Валенок, введи число от 1го до 3х!!!")
                    
            }
            case 4: 
            alert("ТЕБЕ СИЛЬНО/КРЕПКО ПОВЕЗЛО, ТЫ ВЫБРАЛ ПРИЗМУ!\nСчитать будем только объем и преподаватель разрешил взять одну любую призму.\n В нашем случае это будет призма с равнобедренным треугольником в основании.\n Далее введи высоту призмы и длину грани треугольника и не попутай ничего).")
            let visota= prompt("Чему равна высота призмы?")
            let shirina = prompt("Чему равна длина грани?")
            if (Number(shirina)&&Number(visota)) {
                alert(`Объем призмы равен ${vPrizma(Number(visota),Number(shirina))}.`)
            } else {
                alert("Валенок, вводить надо числа!!!")
            }
            

            

            
                
            
           
            default: alert("Валенок, введи число от 1го до 5ти!!!")
          
        }



        function vKub(rebro) { 
            return Math.pow(rebro,3);
        }
        function sKub(rebro) { 
            return 6*Math.pow(rebro,2);
        }
        function dKub(rebro) { 
            return rebro*Math.sqrt(3);
        }
        function vParalelepipeda(dlina,visota,shirina) {
            return dlina*shirina*visota ; 
        }
        function sParalelepipeda(dlina,visota,shirina) {
            let P_o = 2*(dlina+shirina);
            let S_b = P_o*visota;
            return S_b+2(dlina*shirina);
        }
        function sPoverhnosti(dlina,visota,shirina) {
            let P_o = 2*(dlina+shirina);
            let S_b = P_o*visota;
            let S_o = dlina*shirina;
            return 2*S_o + S_b;

        }
        function vPrPapalelepiped(dlina,visota,shirina) {
            return dlina*visota*shirina;
        }
        function sPrPapalelepiped(dlina,visota,shirina) {
            return 2*dlina*visota + 2*dlina*shirina + 2*visota*shirina;
        }
        function dPrPapalelepiped(dlina,visota,shirina) {
            return Math.sqrt(Math.pow(dlina,2)+Math.pow(visota,2)+Math.pow(shirina,2))
        }
        function vPrizma(visota, gran) {
            let S_osnovania = Math.sqrt(3)/4*Math.pow(gran,2)
            return S_osnovania*visota
        }
       
        


    
