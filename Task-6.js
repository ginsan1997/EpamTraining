
'use strict'

// В try catch конструкцию завернуть код:
// console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
//1.
try {
console.log(a)
let a = 3

} catch (err){
       console.error(err.name + err.message + ":" + ' let перед использованием нужно объявить')
} 


//2.
let x = 57
let y = 0
let result = x/y
try {  
        if(result === Infinity || x === 0 || y === 0) throw "Нельзя делить на ноль, проверь данные"

        }
catch(err){
console.error(`Ошибка: `+ err)

}
console.log(`Вашe решение: ${x} / ${y} = ${result}`)