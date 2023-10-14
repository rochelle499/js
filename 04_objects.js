// const tinderuser = new Object()
const tinderuser ={}

tinderuser.name='rochelle'
tinderuser.id='7679'
tinderuser.email='roch@gmail.com'
// console.log(tinderuser)


const reguser ={
    id:'76870',
    fullname:{
        username:{
            fname:'rochelle',
            lname:'coutinho'


        }
    }

}
// console.log(reguser.fullname.username)


//combine in 2 object

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

// const obj3 = {obj1, obj2} this will not combine both objects 

// const obj3=Object.assign(obj1,obj2)

// const obj4=Object.assign({},obj1,obj2)

// const obj4={...obj1,...obj2}

// console.log(obj4)

// console.log(users[1].id)
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderuser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 12,
//         email: "h@gmail.com"
//     },
//     {
//         id: 15,
//         email: "h@gmail.com"
//     },
// ]


//////////////////destructing objectss

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//destructing an object
console.log(course.courseInstructor)


// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

