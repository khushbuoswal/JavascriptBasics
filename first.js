// async await >> promise chains >> callback hell
/*
// synchronous programming, here "two" is waiting for "one" to finish
console.log("one");
console.log("two");
console.log("three");

// asynchronous programming here three is not waiting for hello function to finish
// setTimeout is a function that takes a callback and a delay in milliseconds
console.log("one");
console.log("two");
setTimeout( () => {
    console.log("hello");
}, 2000);
console.log("three");
*/

/*
function getData(dataId, nextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(nextData) {
                nextData();
            }
        }, 2000);
    })
}
    */



/*
// callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        })
    });
});
*/

/*
// promises
// let promise = new Promise((resolve, reject) => {...})
const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("one");
    resolve("done");
})
}

let promise = getPromise();

promise.then((res) => {
    console.log("you did it", res);
})

promise.catch((err) => {
    console.log("you killed it" ,err);
})
    */

// promise chaining
/*
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");

        }, 2000);
    })
}


getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
})
    */

// async await
// async function means to return a promise

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");

        }, 2000);
    })
}
// await pauses the execution of async function until the promise is settled. but in the background it is still running - it is still running UI
// IIFE - Immediately Invoked Function Expression
// (func) ();
(async function (){     // konsa function return hoga yaa fir kya resolve hofga yeh sab karne ki jarurat nahi hai
    await getData(1);
    await getData(2);
    await getData(3);
}) ();
















