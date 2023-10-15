// let a=10
// const b=20
var c=30
// there is no problem when we are using it without scope{}

// console.log(a)
// console.log(b)
// console.log(c)

// when scope comes in picture

if(true){
    let a=20
    const b=30
    var c=40

}

// now when i am using console.log for a n b it will not get printed as the variable is inside the scope
// console.log(a)
console.log(c)

//var will always take the value from the block scope and not the global scope

if(true){
    let a=20
    const b=30
    var c=40
    console.log(a)

}




