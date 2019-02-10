var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

var mixer = [];

var drawnCards = [];

function deal(){
  //if card element already exists in DOM, throw err
  var myEle = document.querySelector('.card');
  if(myEle){
    console.log('Error, deck has already been dealt');
  } else {
    for (var i = 0; i < cards.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        mixer.splice(0, 0, cards[i] + ' of ' + suits[j]);
      }
    }
    for (var i = 0; i < mixer.length; i++) {
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.appendChild(document.createTextNode(mixer[i]));
      document.querySelector('.card-container').appendChild(card);
    }
    console.log('Cards dealt');
  }
}

function shuffle(){
  var i = mixer.length;
  var j;
  var temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = mixer[j];
    mixer[j] = mixer[i];
    mixer[i] = temp;
  }
  x = document.querySelectorAll('.card');
  for (var i = 0; i < mixer.length; i++) {
    x[i].innerText = mixer[i];
  }
  console.log('Shuffle executed');
}

function clearDeck(){
  //if card element already exist in DOM, remove all instances
  cardElem = document.querySelectorAll('.card');
  Array.prototype.forEach.call(cardElem, function(node) {
    node.parentNode.removeChild(node);
    mixer.pop();
  });
  console.log('Deck Cleared');
}

function drawCard(){
  var random = Math.floor(Math.random() * (mixer.length + 1));
  console.log(random);
  //add to drawnCards
  drawnCards.splice(0, 0, mixer[random]);
  //remove from mixer
  mixer.splice(mixer[random], 1);
  //remove all drawn cards to prevent duplicates being shown
  cardElem = document.querySelectorAll('.drawn-card');
  Array.prototype.forEach.call(cardElem, function(node) {
    node.parentNode.removeChild(node);
  });
  //display drawn cards in DOM
  for (var i = 0; i < drawnCards.length; i++) {
    var drawnCard = document.createElement('div');
    drawnCard.setAttribute('class', 'drawn-card');
    drawnCard.appendChild(document.createTextNode(drawnCards[i]));
    document.querySelector('.table-container').appendChild(drawnCard);
  }
  updateCards();
}

function updateCards(){
  cardElem = document.querySelectorAll('.card');
  Array.prototype.forEach.call(cardElem, function(node) {
    node.parentNode.removeChild(node);
  });
  for (var i = 0; i < mixer.length; i++) {
    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.appendChild(document.createTextNode(mixer[i]));
    document.querySelector('.card-container').appendChild(card);
  }
}

function sortBy(){
  var selectBox = document.querySelector("#selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue === 'Suit') {
    console.log('Sort By Suit');
    drawnCards.sort();
  }
  if (selectedValue === 'Value') {
    console.log('Sort By Value');
  }
}
