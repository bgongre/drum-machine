class Game {
  constructor() {
    this.hand = new Hand();

    this.init();
  }

  init() {
    this.hand.playerTurn();
    console.log(this.hand);
  }

};

class Hand {
  constructor() {
    this.cards = [];
    this.dealCards = 2;
    this.cardsDealt = 0;

    this.init();
  }

  init() {
    for(let c = 0; c < this.dealCards; c++) {
      this.drawCard();
    }
  }

  drawCard() {
    const card = new Card();
    this.cards.push(card);
    this.cardsDealt++;
  }

  endGame() {
    const playerHandValue = this.hand.getHandValue();
    const dealerHandValue = Math.floor(Math.random()*21);

    if (playerHandValue > dealerHandValue && playerHandValue <= 21) {
      alert("Boo YAH CACHA");
    } else {
      alert("YOU SUCK");
    }
  }

  getHandValue() {
    let sum = 0;
    for(let i = 0; i < this.cards.length; i++) {
      console.log(this.cards[i].getRank('integer'));
      sum += this.cards[i].getRank('integer');
    }
    return sum;
  }

  playerTurn() {
    const playerResponse = prompt("Would you like to draw another card? Y/N");

    playerResponse.toLowerCase();

    if (playerResponse === "y" || playerResponse === "yes") {
      this.drawCard();
    } else if (playerResponse === "n" || playerResponse === "no") {
      this.endGame();
    }
  }
};

const rankList = [["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9], ["10",  10], ["J", 10], ["Q", 10], ["K", 10], ["A", 1]];
class Card {

  constructor () {
    this.rank = this.setRank();
  }

  getRank(dataType) {
    let index;

    index = (dataType == 'integer') ? 1 : 0;

    return this.rank[index];
  }

  setRank() {
    return rankList[Math.floor(Math.random()*rankList.length)];
  }
};

const game = new Game();
