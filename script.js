    /*    console.log("log");

        alert("hello");
        let num = prompt("Enter your name:"); // input
        if(num % 5 == 0) {
        console.log("Divisible by 5");
        }
        else{
            console.log("Not divisible by 5");
        }

        confirm("Are you sure?");

        let str = "khushbu";

        for(let i of str){
            console.log(i);
        }

        let student = {
            name: "Rahul Kumar",
            age: 20,
            cgpa: 7.5,
            isPass: true,
        }

        for(let i in student){ // for in loop and there is one more "for of loop"
            console.log(i + ": " + student[i]);
        }

        let ko = 5
        let userNum = prompt("Enter your num:");
        console.log(userNum);
        while(userNum != ko){
            userNum = prompt("Enter your num:");
            console.log(userNum);
        }

        str = "hello   yghvhvb";

        console.log(str[3]);

        let userName = prompt("Enter your name:");
        lame = userName.length;
        console.log("@" + userName + lame);

        

count = 0;
const val = (c) => {
    for(const i of c){
        if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            console.log("vowel");
            count++;
        }
    }
    console.log(count);
}
val("hello");


// map
let array = [3,5,7,8,9,];
let n = array.map((val) => { // if you return then only new array will be created but if you don't return then it will not create new array
    return val;
});
console.log(n);

//forEach
let arr = [1,2,3,4,5];
arr.forEach((arr) => {
    console.log(arr);
});



let ar = [1,2,5,2,7,8,9];
ar.forEach((val, idx, arr) => {
    console.log(val,idx,arr);
});

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});


// filter 
let arr = [1,2,3,4,5];

let evenArr = arr.filter((val) => {
    return val % 2 == 0;
}
);
console.log(evenArr);

// reduce
const array1 = [1,5,3,7,2,4];
const intialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, intialValue);
console.log(sumWithInitial);

let arr = [5,6,2,1,3];
const output = arr.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
});
console.log(output);


// questions
let arr =[1,2,3,98,97];
let mo = arr.filter((val) => {
    return val>90;
});
console.log(mo);

let arr1 = [];
let n = prompt("Enter your name:");
for(let i =0; i<n; i++){
    arr1[i] = i;
}
console.log(arr1);

window.alert("Hello World");
// the window object is the global object in the browser(not javascript's). 
// It represents the browser window and provides methods and properties to interact with it.
// The alert() method displays an alert box with a specified message and an OK button.



// DOM = Document Object Model --> to acces html code in javascript 

// How to access javascript code inside the html file?
// HTML Code --> inside javascript become object(document). And this document is available in our window object.
window.document
 console.dir(window.document);

 // console.log --> print
 // console.dir --> print the methods and properties of the object

 */

 /* const age = 24;
let name = "John Doe";
name = "Jane doe";

console.log(name);

*/

/*
let heading2 = document.getElementById("btn"); // return the value of button
console.dir(heading2);
let heading13 = document.getElementsByClassName("myClass"); // return the value of class
console.dir(heading13);
let para = document.getElementsByTagName("p"); // return the value of tag
console.dir(para);
console.log(para);


let firstEl = document.querySelector("h4"); // return the first element of the selector
console.log(firstEl);
let allEl = document.querySelectorAll("h4"); // return the all elements of the selector
console.log(allEl);
*/

/*
DOM Manipulation
tagName: returns tag for element node
innerText: returns the text content of the element and all its descendants
innerHTML: returns the HTML content of the element
textContent: returns the text content of the element and all its descendants

*/



/*
let a = document.createElement("button"); // create a button element
a.innerText = "Click Me";

a.style.backgroundColor = "red"; // change the background color of the document
a.style.color = "white"; // change the color of the document

document.querySelector("body").prepend(a); // append the button to the body of the document

let p = document.querySelector("p");
p.classList.add("newClass"); // add class to the p element
*/

/*

let btn1 = document.querySelector("#btn");
btn1.onclick = () => {

    console.log("Button 1 clicked");
    let a = 25;
    a++;
    console.log(a);

}

let div = document.querySelector("#div"); // priority goes to javascript handling not inline handling(html handling)
div.onmouseover = () => {
    console.log("Mouse over div");

};
*/

/*
Drawbacks of inline(It makes HTML look bulky) and Javascript function(we can write ony one function during event handling)
let btn1 = document.querySelector("#btn");
btn1.onclick = (e) => {

    console.log(e);

    console.log("Button 1 clicked");
    let a = 25;
    a++;
    console.log(a);

}
*/

/*
// node.addEventlistener(event, callback)
// node.removeEventlistener(event, callback)

btn.addEventListener("click", (e) => {
    console.log("Button 1 clicked");
}
);

btn.addEventListener("click", (e) => {
    console.log("Button 2 clicked");

}
);

*/

/*
let a = document.querySelector("#btn");
let body = document.querySelector("body");
let curmode = "light";

a.addEventListener("click" , () => {
    if(curmode == "light"){
        curmode = "dark";
        body.classList.add("dark");
    }

    else{
        curmode = "light";
        body.classList.add("light");
    }
})

*/














