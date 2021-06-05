
window.onscroll = () => {
"use strict";
var myNav = document.getElementById("header");
if (document.body.scrollTop >= 900 || document.documentElement.scrollTop >= 900) {
    myNav.classList.add("nav-scrolled");
    myNav.classList.remove("header");
} else{
    myNav.classList.add("header");
    myNav.classList.remove("nav-scrolled");
}
};

const persons = [
    {name:"mohammad", age: 22,},
    {name:"suliman", age: 20,},
    {name:"yahya", age: 16,},
    {name:"malk", age: 11,},
    {name:"abood", age: 3,},
]

let names = persons.map((person) => {
    return console.log(`Hi ${person.name}, your age is ${person.age}`);
})