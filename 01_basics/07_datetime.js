let mydate = new Date()
//when typing like this the output is not so understandable
//console.log(mydate)

// isse thode zyda samaj raha hai
//console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

// 2023 is year 0 is jan as we are giving it in array and 15 is day
// let createdDate = new Date(2023,01,15)
// console.log(createdDate)
// console.log(createdDate.toLocaleDateString())

// you can give input like this too
 let createdDate = new Date("2023-03-18")
// console.log(createdDate.toDateString())


//Timestamp

let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(createdDate.getTime())

//interview q on how to convert the miliseconds to seconds

// console.log(Math.floor(mytimestamp/1000))


//more date functions

let newdate = new Date()
console.log(newdate.getDay())


//new date functions

newdate.toLocaleDateString('default',{
    weekday:'narrow'

})





