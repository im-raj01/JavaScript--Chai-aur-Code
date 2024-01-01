const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstName:"aditya",
            lastName: "raj"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.lastName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)//-> obj1 will be modified
// const obj3 = Object.assign({},obj1,obj2)//-> obj1 will not be modified

const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(obj1 === obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggdeIn'));

//de-structuring:

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);
const {courseInstructor : instructor} = course

console.log(instructor);

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
