const express = require('express');
const CryptoJS = require('crypto-js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// Decrypt
// let bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
// let plaintext = bytes.toString(CryptoJS.enc.Utf8);
//
// console.log(plaintext);


//CONNECTING TO THE FRONT END
app.use(express.static('public'))

app.use(bodyParser.json());

app.post('/', (req, res) => {
  let ciphertext = CryptoJS.AES.encrypt(req.body.data, 'secret key 123');
  console.log(ciphertext.toString());
  res.redirect('index.html');
});

app.get('/', (req, res) => {
  res.redirect('index.html');
});

//CONNECT TO SPECIFIED PORT OR DEFAULT 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Connected');
})
