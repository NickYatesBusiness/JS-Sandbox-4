const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = '30';

mary.getsMarried('Thompson')

console.log(mary.greeting())

const Nick = Object.create(personPrototypes, {
  firstName: {
    value: 'Nick'
  },
  lastName: {
    value: 'Yates'
  },
  age: {
    value: 36
  }
})

console.log(Nick)

console.log(Nick.greeting())