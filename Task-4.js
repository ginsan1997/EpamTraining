
//1.Классы ES5

const Animal = function(){
   this.move = function(){
       console.log("Can move Classes")
   }
}
const cat = new Animal()


// 2.Прототип ES5
Animal.prototype.move = function(){
    console.log("can move Proto")
}

const cat2 = Object.create(Animal.prototype)

//3.Classes ES6

class Animals {
    constructor(options){
        this.move = true
        this.name = options.name
    }
}

const cat3 = new Animals ({name: "Barsik"})