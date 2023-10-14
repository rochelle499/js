// objects can b created in 2 ways
// 1.CONSTRUCTOR (SINGLETON)
//Object.create


//2. LITERAL 
// const myJS={}

const mysym = Symbol("mykey")
const Jsuser ={
    name :"rochelle",
    age:'24',
    location:'jaipur',
    islogged : false,
    email :' rochelle.5@gmail.com',
    "f_name": "coutinho",
    [mysym]:"key1"
}
// two ways of accesing an object in js
//console.log(Jsuser.name)  1.not a good way  
//console.log(Jsuser.f_name)

// console.log(Jsuser["email"]) 2.way

// symbol inside the object is defined as []

console.log(Jsuser)

// Jsuser.email = 'rocheel@gpt.com'
// Object.freeze(Jsuser)
// Jsuser.email =' rochelle@micro.com'

// console.log(Jsuser)


Jsuser.greeting = function () {
    console.log("HEllo Js user")
}

Jsuser.greetingtwo = function(){

    console.log(`hello JS ${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())