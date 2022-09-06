// import {name} from './modules/user.js'
// import {name,withdraw} from './modules/user.js'
import * as user from './modules/user.js'
// import {code} from './modules/user.js'
import {default as acc, withdraw as wd , deposit} from './modules/account.js'

// import {circle} from './modules/shapes/circle.js'
// import {square} from './modules/shapes/square.js'
// import {triangle} from './modules/shapes/triangle.js'
                    // or //
import {circle,square,triangle} from './modules/shapes.js'


console.log(name)
// code()
// withdraw()

console.log("")
user.code()
console.log("")

wd()
deposit()

console.log("")
acc() // default function call
console.log("")

circle()
square()
triangle()