class test {
  constructor(date) {
  this.date = document.getElementById('date');
}

init() {
    this.date = setDate();
    // this.prevHash.value = 0;
  }

  todayDate() {
    let today = new Date();
    let utcDate = today.toUTCString();
    return utcDate;
  }

  setDate() {
    this.date.innerHTML = todayDate();
  }

}

const date = new test()
date.init();
