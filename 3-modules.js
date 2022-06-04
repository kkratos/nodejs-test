// CommonJS - every file is module (by default)

// Modules - encapsulated Code (only share minimum)
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('Susan')
sayHi(john)
sayHi(peter)

console.log(data.items)
console.log(data.singlePerson)