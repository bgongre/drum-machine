var Candi = {
  name: "Candi",
  lastName: "Smith",
  yearOfBirth: 1976,
  calculateAge: function(){
    console.log(this);
    console.log(2018 - this.yearOfBirth);
  }
}

Candi.calculateAge();
