export default function(){
    console.log("account default function")
}

let account = 4654
let type = "saving"

// export function withdraw(){
function withdraw(){
    console.log("amount deducted")
}

// export function deposit(){
function deposit(){
    console.log("amount updated")
}

export{withdraw,deposit}