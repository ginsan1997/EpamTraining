
'use strict'

//1.массив фильмов
let movies = ["Черная пантера", "Мстители", "Человек паук", "Бэтмен", "Супермен","Терминатор"]
console.log(movies);

//2.массив автомобилей
let auto = ["БМВ", "Мерседес", "Хонда", "Мазда", "Лада","Хёндаи"]

console.log(String(auto.join()));
console.log(auto)

//3.Имена знакомых
let names = ["Никита", "Анна", "Дмитрий", "Кирилл", 'Даша'];
for(let i = 0; i<names.length; i++) {
        let hello =' hello '
        let sum = hello + names[i]
        let namesArr = sum.split()   
console.log(namesArr)
    }

//4.Преобразовать числовой массив в Boolean

let numArr = [1,2,3,4,5,6,7,8,9,0]
console.log(String(numArr));

//5.Преобразовать числовой массив в Boolean
let numArrBool = [1,2,3,4,5,6,7,8,9,0]
console.log(Boolean(numArrBool))

//6.Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let arrNum = [1,6,7,8,3,4,5,6]
console.log (arrNum.sort((a,b) => b - a))

//7.Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let arrNumnew = [1,6,7,8,3,4,5,6]
let result = arrNumnew.filter((arrNumn => arrNumn > 3))
console.log(result)

//8.Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

let arr = ["kira","ann","house"]

function arrFunc(arr, num){
    for(let i = 0; i<arr.length; i++){
    if(num === i){
        console.log(arr[i])
    }           
    }}
        arrFunc(arr, 0)

//9.Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

for (let i = 0 ; i<10; i++){
    console.log(i)
    continue;
}

//10.Реализовать цикл, который выводит в консоль простые числа

nextPrime:
for (let i = 2; i<=100; i++){
    for(let x = 2; x<i; x++){
        if (i % x === 0){
            continue nextPrime;
        }
  }   
     console.log(i)  
    }

 //11.Реализовать цикл, который выводит в консоль нечетные числа

 for(let i = 0; i < 100; i++){
     if(i%2!=0)
     console.log(i)
 }