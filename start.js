1


/*
it will print "joel" because a code block does not create a scope for var variables 
*/

2

/* 
In this case the value of this is default to the global object */

3

/*
In this case "this" will Reference a new empty Object
*/

4 

function a() {
    const test = "Hello World";
    function b() {
        const best = "We are the best";
        function c() {
            console.log(test, best)
        }
        console.log(test);
    }
    b()
}
a()

/* In this case it print on "hello world" because in fucntion  b there is nuthing is return and fuction c no variable */


// 4. Write a function that returns a random number.

function randomNumber(num) {
    console.log(Math.floor(Math.random() * num))
}
randomNumber(100)

// // 5. Write a function that prints the message `"“Meow” means “woof” in cat.”"`

function message(str) {
    console.log(str);
}
message(`“Meow” means “woof” in cat.”`)


// // 6. Write a function that takes in one variable and *returns* the type of that variable

function typeOfVariable(variable) {
    return (typeof variable)
}
console.log(typeOfVariable(2))
console.log(typeOfVariable("hello"))
console.log(typeOfVariable([]))

// // 7. Write a function that takes in a string and returns the first letter in that string

function firstLetter(str) {
   return str.substr(0,1)
}
console.log(firstLetter("Hello"))

// // 7. Write a function that takes in an array and returns the first item in that array

const fruits = ["mango", "orange", "Banana"];

function firstItem(array) {
    return array.shift()
}
console.log(firstItem(fruits))

// // // 8. Write a function that takes in a string, and then returns true if that string has 3 characters, otherwise it should return false.

const threeCharacter = (str) => (str.length === 3) ? true : false;
console.log(threeCharacter("ant"))
console.log(threeCharacter("antman"))