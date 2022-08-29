'use strict'
var name = 'Jay'
var person = {
  name: 'Wang',
  pro: {
    name: 'Michael',
    getName: function () {
      return this.name
    },
  },
}
console.log(person.pro.getName())
var people = person.pro.getName
console.log(people())
