//Javascript Promises Exercises 
//----Part 1 Number Facts----//
//Jae Kim

const favNum = 7
const baseURL = 'http://numbersapi.com'


//Number 1
$.getJSON(`${baseURL}/${favNum}/?json`).then(data => {console.log(data)})

//Number 2
let favNums = [7,11,5];
$.getJSON(`${baseURL}/${favNums}/?json`).then(data => {console.log(data)})

//Number 3

let fourFactsforFavNum = [];

for (let i = 1; i < 5; i++) {
    fourFactsforFavNum.push($.getJSON(`${baseURL}/${favNum}/?json`));
}

Promise.all(fourFactsforFavNum).then(factsArr => (factsArr.forEach(data=> $("body").append(`<p>${data.text}</p>`))))















