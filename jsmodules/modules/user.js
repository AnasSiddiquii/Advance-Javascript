// default function is an annonymus function
// there can be only one default function in a file
// default function has to be exported

export default function(){           //default
    console.log("user default function")
}

import {deposit} from './account.js'  //import

export let name = "Anas"
let age = 23

export function code(){
    console.log("coding...")
    deposit()                         //call
}

export function withdraw(){
    console.log("user js amount deducted")
    }
    
function cook(){
    console.log("cooking...")
}