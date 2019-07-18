const fs = require('fs');

function question1() {
  fs.readFile('input.txt', (err, data) => {
    console.time('santa-time');
    const directions = data.toString();
    const directionsArr = directions.split('');
    const answer = directionsArr.reduce((acc, currentValue) => {
      if (currentValue === '(') {
          return acc += 1
      } else if (currentValue === ')') {
        return acc -= 1
      }
    }, 0)
    console.timeEnd('santa-time');
    console.log('floor', answer);
  })
}

question1();

function question2() {
  fs.readFile('input.txt', (err, data) => {
    console.time('Q2 - santa-time');
    const directions = data.toString();
    const directionsArr = directions.split('');
    let acc = 0;
    let counter = 0;
    const answer = directionsArr.some((currentItem) => {
      if (currentItem === '(') {
        acc += 1
      } else if (currentItem === ')') {
        acc -= 1
      }
      counter ++;
      return acc < 0;
    })
    console.timeEnd('Q2 - santa-time');
    console.log('basement entered at: ', counter);
  })
}

question2();
