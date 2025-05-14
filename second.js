const url = "https://catfact.ninja/fact";
let factPara = document.querySelector("#myId"); 
let btn = document.querySelector("#btn");


// our page doesn't reload at runtime everything updates.
const getFacts = async () => {
    let response = await fetch(url); // Get Request
    console.log(response); // JSON Format not XML(pehle k time mein hota tha), AJAJ API because it return data in jason format
    // AJAX API Because it return data in XML format
    let data = await response.json();
    factPara.innerText = data.fact;
} 

btn.addEventListener("click", getFacts);
// Now we have to convert JSON format in to JS Object with the help of Json() method(Asynchronous method), fetch method(asynchronous method)
// 400 - bad request - client error
// HTTP request = PUT, DELETE, GET, POST
// 500 - 599 - server error
// 400 - 499 - client error
// header in API means extra information about the data







