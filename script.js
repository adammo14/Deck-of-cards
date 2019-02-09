var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

function shuffle(){
  var i = cards.length;
  var j;
  var temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  }
  clearDeck();
  deal();
  console.log('Shuffle executed');
}

function clearDeck(){
  //if card element already exist in DOM, remove all instances
  cardElem = document.querySelectorAll('.card');
  Array.prototype.forEach.call(cardElem, function(node) {
    node.parentNode.removeChild(node);
  });
  console.log('Deck Cleared');
}

function deal(){
  var myEle = document.querySelector('.card');
  if(myEle){
    console.log('Error, deck has already been dealt');
  } else {
    for (var i = 0; i < cards.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        //console.log(cards[i] + ' of ' + suits[j]);
        var card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.appendChild(document.createTextNode(cards[i] + ' of ' + suits[j]));
        document.querySelector('.card-container').appendChild(card);
      }
    }
    console.log('Cards dealt');
  }
}
