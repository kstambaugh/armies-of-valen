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

const Necromancer = {
    type: 'none',
    level: 2,
    name: 'none'
}

const baseCharacter = {
    level: 0,
    name: "",
    health: 5,
    attack: 5,
    armor: 5,
    focus: 5,
    speed: 5,
    recover: 5,
}


const createNewCharacter = (x) => {
    let key;
    let value;
    for (let i in character) {
        key = i
        value = character[i]
    }
}

createNewCharacter(Necromancer)
// console.log(Necromancer)

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