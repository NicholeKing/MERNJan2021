//Variables
var teacher = "Nichole";
var age = 26;
var hobbies = ["gaming", "drawing", "sleeping"];
var hungry = false;
var instructor = {
    instruct : "Nichole",
    age : 26,
    hobs : ["gaming", "drawing", "sleeping"],
    hunger : false
}

console.log(teacher);
console.log(instructor.instruct);
console.log(instructor.hobs[1]);

//Syntatic Sugar

//let 
for(let i = 0; i < 5; i++){
    console.log(i);
}
//This breaks the code
//console.log(i);

//const
const num = 9;
console.log(num);
// This breaks the code
// num = 7;
// console.log(num);

//Destructuring
// var h1 = hobbies[0];
// var h3 = hobbies[2];
// console.log(h1);
// console.log(h3);

var [hob1,,hob3] = hobbies;
console.log(hob1);
console.log(hob3);
console.log(hobbies);

var arr = [1,2,3,4,5,6,7,8,9,0];
var [v1,,,v2,,,v3] = arr;
console.log(v1, v2, v3);

var { hobs : my_hobs } = instructor;
my_hobs[0] = "Walking";
console.log(my_hobs);

//Rest/Spread
var arr2 = [...arr];
arr2[3] = 20;
console.log(arr);
console.log(arr2);

//Ternary
if (hungry == true){
    console.log("I am hungry!")
} else {
    console.log("I'm good");
}

//Arrow function
function feed(){
    if(hungry){
        hungry = false;
    } else {
        hungry = true;
    }
}

feed();

hungry ? console.log("I am hungry!") : console.log("I'm good");

const feedMe = () => hungry ? hungry = false : hungry = true;

feedMe();

hungry ? console.log("I am hungry!") : console.log("I'm good");

const hello = greet => console.log(greet); 

hello("Salutations!");
hello("Greetings!");