//Javascript Promises Exercises 
//----Part 2 Deck of Cards----//
//Jae Kim


$(function(){

let baseURL = "https://deckofcardsapi.com/api/deck"

//Number 1 
$.getJSON(`${baseURL}/new/draw/?count=1`)
    .then( data => { let {value, suit} = data.cards[0];
    console.log(`You have drawn the ${value} of ${suit}`)})

//Number 2
let firstCard;

$.getJSON(`${baseURL}/new/draw`).then(
    data => { firstCard = data.cards[0];
              let deckId = data.deck_id;
              return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)})
    .then(data => {
        let secondCard = data.cards[0];
        let cardList = [firstCard, secondCard];
        cardList.forEach((card) => {
            console.log(`${card.value} of ${card.suit}`)
        })
    })

//Number 3

$genCardbtn = $("#card-generate");
$cardArea = $("#card-area");
let deck_id;

$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deck_id = data.deck_id;
    $genCardbtn.show();
  });

  $genCardbtn.on('click', function(event){
    event.preventDefault();
    $.getJSON(`${baseURL}/${deck_id}/draw/`).then(
        data => {
            let card_img = data.cards[0].image;
            $cardArea.append(
              $('<img>', {
                src: card_img
              })
            )

            if (data.remaining === 0) {
                alert("You've used up all the cards in the deck!")
               $genCardbtn.remove();
            }
        })
    });

})
