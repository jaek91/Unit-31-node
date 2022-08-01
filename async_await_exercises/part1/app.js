//Javascript async/await exercises//
//----Part 1 Number Facts----//
//Jae Kim

const favNum = 7
const baseURL = 'http://numbersapi.com'


// Number 1
async function part1() {
    let response = $.getJSON(`${baseURL}/${favNum}/?json`);
    console.log(response);
}

part1()

// Number 2
let favNums = [7,11,5];
async function part2() {
    let response = $.getJSON(`${baseURL}/${favNums}/?json`);
    console.log(response);
}

part2()

// Number 3


async function giveFourFactsforFavNum() {

    let fourFactsforFavNum = [];
    for (let i = 1; i < 5; i++) {
        fourFactsforFavNum.push($.getJSON(`${baseURL}/${favNum}/?json`));
    }

    let response = await Promise.all(fourFactsforFavNum)        
    response.forEach( data => {$("body").append(`<p>${data.text}</p>`)})

}

giveFourFactsforFavNum()
















