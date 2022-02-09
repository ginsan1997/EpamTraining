
// 1.Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
let str = 'ahb acb aeb aeeb adcb axeb';
let regexp = /a.b/g
console.log(`В строке: ${str}, найти ahb, acb, aeb. Итог: `,str.match(regexp).join())

// 2.Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные

let str2 = '2+3 223 2223'
let regexp2 = /\d\+\d/g
console.log(`В строке: ${str2}, найти 2+3. Итог: `,str2.match(regexp2))

//3.Получить день, месяц и год текущей даты и по отдельности вывести в консоль

let now = new Date();
console.log ("Получить день, месяц и год текущей даты и по отдельности вывести в консоль: ",now)
console.log(`Число `,now.getDate(),`, День недели: `, now.getDay()  )
console.log(`Месяц: `,now.getMonth() + 1) //Массив выводит значения от 0 до 11. Увеличил на 1 каждое значение!
console.log(`Год: `,now.getFullYear())
