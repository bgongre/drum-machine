const addButton = document.getElementById('add-button');
const mineButton = document.getElementById('mine-button');

let encryptArr = [];
let nonceArr = [];
nonceArr[0] = 2345;

// window.onload = function() {
//   Particles.init({
//     selector: '.background',
//     maxParticles: 100,
//     color: ['#69ffb9', '#76ecfb', '#c1fda0', '#9386e6', '#f298f4'],
//     connectParticles: true
//   });
// };

class Block {
  constructor(date, input, hash, prevHash, nonce, blockTxt, blockNum) {
    this.date = date;
    this.input = input;
    this.hash = hash;
    this.prevHash = prevHash;
    this.nonce = nonce;
    this.blockTxt = blockTxt;
    this.blockNum = blockNum;
  }

  init() {
    this.setDate();
    this.prevHash.value = 0;
  }

  todayDate() {
    let today = new Date();
    let utcDate = today.toUTCString();
    return utcDate;
  }

  setDate() {
    this.date.innerHTML = this.todayDate();
  }

  encryptData(str) {
    str = this.input.value;
    let encrypt = CryptoJS.SHA256(str);
    let encryptStr = this.hash.value = encrypt.toString();
    encryptArr.push(encryptStr);
  }

  getHash() {
    encryptArr[0] = this.hash.value;
  }

  setPrevHash() {
    this.prevHash.value = encryptArr[0];
  }

  calcNonce() {
    str = '';
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    while (str.length < 4) {
      str += possible.charCodeAt(Math.floor(Math.random() * possible.length));
    }
    return str;
  }

  setNonce() {
    nonceArr[0] = this.calcNonce();
  }

  placeNonce() {
    this.nonce.value = nonceArr[0];
  }

}

const block = new Block(document.getElementById('date'),
                  document.getElementById('data-input'),
                  document.getElementById('hash-info'),
                  document.getElementById('p-hash'),
                  document.getElementById('nonce-info'),
                  document.getElementById('block-txt'),
                  1
                );
block.init();

class BlockController {
  constructor(date, input, hash, prevHash, nonce, blockTxt, blockNum){
    
  }

  addBlock() {
    let block = document.getElementById('box-wrapper');
    let clone = block.cloneNode(true);
    block.parentNode.insertBefore(clone, block.nextSibling);
    this.clearInputData();
  }


    changeBlockNum() {
      this.blockTxt.innerHTML = 'Block #' + block++;
    }

    clearInputData(){
      this.input.value = '';
      this.hash.value = '';
      this.nonce.value = '';
    }

}

mineButton.addEventListener('click', () => {
    block.encryptData();
    block.getHash();
    block.placeNonce();
})

// hashTxt.addEventListener('input', this.setNonce);

addButton.addEventListener('click', () => {
  addBlock();
  clearInputData();
  setPrevHash();
  changeBlockNum();
  setDate();
  setNonce();
  disableInput();
})
