

//1.Задание с машиной
let powerEngine = function powerEngine(power){
    console.log (`Мощность двигателя: ${power} Ватт`);
}

let car = {
    color: "Черный",
    power: powerEngine(240)
}

car.color = "Зеленый"



//2.Найти сумму груш и яблок на складе
let warehouse = function (apple, pear ){
    function sumAP(){
         console.log ("Сумма яблок и груш: ", apple + pear) 
    }
    sumAP();
}

warehouse(31, 20)

//3.Терминал оплаты и вывод имени


function terminal (){
    function nameCheck (){
        let name = (prompt('',''));
        if (name === (null) ) {
            console.log('Нет такого имени')
        }
        else {
            console.log (`Привет: ${name}`)
        }
        }
        nameCheck();
    }
    terminal();

//4.Тип аргумента

function typeArgument (arg){
    console.log (`Ваш аргумент ${arg}, тип аргумента ` + typeof(arg))
}
typeArgument("123");



//5.Простое число
function simpleNum (n){
    for (let i=2; i < n; i++){
        if (n % i === 0){
            console.log (n + ' не простое число')
            break;
        }else {
            console.log (n+' простое число')
        }
    }
}

simpleNum(7)