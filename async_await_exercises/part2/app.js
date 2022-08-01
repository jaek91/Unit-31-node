//Javascript async/await Exercises 
//----Part 2 Deck of Cards----//
//Jae Kim


$(function(){

let baseURL = "https://deckofcardsapi.com/api/deck"

//Number 1 
async function part1() {
    let response = await $.getJSON(`${baseURL}/new/draw/?count=1`);
    let {value, suit} = response.cards[0];
    console.log(`You have drawn the ${value} of ${suit}`);
}

part1();

//Number 2
async function part2() {
    let firstCard;
    let response = await $.getJSON(`${baseURL}/new/draw`);
    
    firstCard = response.cards[0];
    let deckId = response.deck_id;

    let response2 = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`);
    let secondCard = response2.cards[0];
    let cardList = [firstCard, secondCard];

    cardList.forEach((card) => {
        console.log(`${card.value} of ${card.suit}`)
    })
}

part2();

//Number 3

async function setupDeckofCards() {

    $genCardbtn = $("#card-generate");
    $cardArea = $("#card-area");

    let deck_id;
    let response = await $.getJSON(`${baseURL}/new/shuffle/`);

    deck_id = response.deck_id;
    $genCardbtn.show();

    $genCardbtn.on('click', async function(event){
        event.preventDefault();
        let response = await $.getJSON(`${baseURL}/${deck_id}/draw/`);
        let card_img = response.cards[0].image;
        $cardArea.append(
            $('<img>', {
              src: card_img
            })
        )

        if (response.remaining === 0) {
            alert("You've used up all the cards in the deck!")
           $genCardbtn.remove();
        }

    })

}

setupDeckofCards();



})
