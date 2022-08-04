const { keyIn } = require("readline-sync")
const readline = require("readline-sync")
var club = false

function randoNum(min, max) {
    return Math.random() * (max-min) +min;
}
function enemySpawn() {
    randoNum(1, 4)
    if (randoNum === 1) {
        let giantRat = {
            health: 10, 
            name: "Giant Rat"
        }
    } else if (randoNum === 2) {
        var skeleton = {
            health: 15,
            name: "Skeleton"
        }
    } else if (randoNum === 3) {
        var prisonGuard = {
            health:20,
            name: "Prison Guard"
        }
    }
     
}
function combat () {
    enemySpawn()
    if (enemySpawn === 'giantRat') {
        var ratCombat = readline.keyIn("a Giant Rat appears before you looking very un-friendly. press 'a' to attack, or press 'r' to try and run.")
    } else if (enemySpawn === 'skeleton') {
        var skeletonCombat = readline.keyIn("a skeleton from the floor suddenly jolts to life and picks up the weapon it weilded in life barring your path. press 'a' to attack, or press 'r' to try and run.")
    } else if (enemySpawn === 'prisonGuard') {
        var prisonGuardCombat = readline.keyIn("as you near the a seemingly more populated part of this dungeon and as you do a guard rounds a corner and as soon as he sees you he point his sword at you and moves to attack pegging you as an escaped prisoner immeadtly. press 'a' to attack, or press 'r' to try and run.")
    }
    
}
var playerInv = []

// function game() {
    const welcome = console.log("_-_-_-_-_- Welcome to the COLOSSAL RPG! -_-_-_-_-_")
    const nameQ = readline.question("_-_-_-_-_- What is your Name Adventurer? -_-_-_-_-_")
    var nameSave = nameQ

    const prompt = readline.keyIn("_-_-_-_-_- well "+ nameSave + " you awake to find yourslef in a dark room in what semingly is a dungeon. you find your chains unlocked, a club on the floor beside you, and the door to your cell open you are free to leave...or so it seems. press 'e' to grab the club. -_-_-_-_-_")
    switch (prompt) { 
        case 'e':
            club = true
            playerInv.push(club)
            const prompt2 = readline.keyIn("-_-_-_-_-_you pick the club up off the ground feeling a little better now that your armed there dosent appear to be anything else in the cell with you of any interest._-_-_-_-_-")
            break 
    }
    var prompt3 = readline.keyIn("-_-_-_-_-_the open door stands before you it is seemingly your best and only option for escape. press 'w' to walk throught the door _-_-_-_-_-")

    switch (prompt3){
        case 'w': 
     if (randoNum(1, 6) > 3) {
        console.log(combat())
     } else {
        var prompt4 = readline.keyIn("-_-_-_-_-_you exit the cell and see a long hallway stretch out in front of you with doors lining the sides all are boarded up, seems the only thing to do is keep going. press 'w' to keep walking-_-_-_-_-_")
     }
    }
// }
