let characterLevel //serves as a multiplier for the below stats
let maxHealth      //total hit points
let maxAttack      //amount of damage (range)
let maxArmor       //reduces incoming damage
let maxFocus       //affects chance to hit
let maxSpeed       //number of hits and turn order
let maxRecover     //how many hit points are regained//how long neg status affects remain


let characterName
let baseHealth
let baseAttack
let baseArmor
let baseFocus
let baseSpeed
let baseRecover

const baseCharacter = {
    health: 8,
    attack: 8,
    armor: 8,
    focus: 8,
    speed: 8,
    recover: 8,
}


const necro = {
    health: 6,
    attack: 2,
    armor: 4,
    focus: 0,
    speed: 0,
    recover: 10,
}
const soldier = {
    baseHealth: 2,
    baseAttack: 5,
    baseArmor: 2,
    baseFocus: 2,
    baseSpeed: 0,
    baseRecover: 1,
}
const machine = {
    baseHealth: 2,
    baseAttack: 0,
    baseArmor: 2,
    baseFocus: -1,
    baseSpeed: -2,
    baseRecover: 5,
}


const undead = {
    type: necro,
    level: 1,
    name: 'none'
}



//this adds the base and type specific statblocks.
const statCompare = (myObj, staticObj) => {
    let myVal = Object.values(myObj)
    let baseVal = Object.values(staticObj)
    let attribute = Object.keys(myObj)
    let newNPC = {}
    for (let i = 0; i < myVal.length; i++) {
        for (let j = 0; j < baseVal.length; j++) {
            if (i == j) {
                statSum = myVal[i] + baseVal[j]
                attStat = (attribute[i])
                newNPC[attStat] = statSum
            }
        }
    }
    return newNPC
}

newNPC = statCompare(necro, baseCharacter)
console.log(newNPC)

const outputCharacter = {
    type: necro,
    level: 1,
    name: "zombie",
    health: 14,
    attack: 10,
    armor: 12,
    focus: 8,
    speed: 8,
    recover: 18,

}
//this adds the base and type specific statblocks.

// const statCompare = (myObj,staticObj) => {
//   let myVal = Object.values(myObj)
//   let baseVal = Object.values(staticObj)
//   let attribute = Object.keys(myObj)
//   let newNPC={}
//   for(let i = 0; i < myVal.length;i++) {
//     for(let j =0; j < baseVal.length;j++){
//       if (i==j){
//         statSum =  myVal[i] + baseVal[j]
//         attStat = (attribute[i])
//         newNPC[attStat] = statSum
//       }
//     }
//   }
//   return newNPC
// }

// newNPC = statCompare(necro, baseCharacter)
// console.log(newNPC)


//does not work... yet

// const createCharacter = (x) => {
//   let lvlMulti
//   for(let i in character){
//     if(i == 'level'){
//       lvlMulti = parseInt(x[i])
//       i++
//     }
//     if(i == 'name'){
//       i++
//     }
//     else{
//         i = i
//         let y = i;
//   let z
//     if (Number.isInteger(character[i])) {
//       z = character[i] + parseInt(lvlMulti)
//     }
//     else {
//       z = character[i]
//     }
//    x[y] = z;
//     i++
//     }
//    }
// }

// createCharacter(Necromancer)
// console.log(Necromancer)

// yay this works

// const statCharacter = () => {
//   for(let i in character){
//     if(i == 'level'){
//       i++
//     }
//     else if (i == 'name'){
//       i++
//     }
//     else{
//       character[i] = 1.5 * characterLevel
//     }
//   }
// }

// levelUpCharacter()