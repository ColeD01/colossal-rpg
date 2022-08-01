const { keyIn } = require("readline-sync")
const readline = require("readline-sync")

function randoNum(min, max) {
    return Math.random() * (max-min) +min;
}
function enemySpawn() {
    randoNum(1, 16)
    if (randoNum <= 5) {
        let giantRat = {
            health: 10, 
            name: "Giant at"

        }
    } else if (randoNum <= 10 ) {
        var skeleton = {
            health: 15,
            name: "Skeleton"
        }
    }else if (randoNum <=15) {
        var prisonGuard = {
            health:20,
            name: "Prison Guard"
        }
    }
}
var playerInv = []

// function game() {
    const welcome = console.log("_-_-_-_-_- Welcome to the COLOSSAL RPG! -_-_-_-_-_")
    const nameQ = readline.question("_-_-_-_-_- What is your Name Adventurer? -_-_-_-_-_")
    var nameSave = nameQ

    const prompt = readline.keyIn("_-_-_-_-_- well "+ nameSave + " you awake to find yourslef in a dark room in what semingly is a dungeon. you find your chains unlocked, a club on the floor beside you, and the door to your cell open you are free to leave...or so it seems. press 'e' to grab the club and/or Press 'w' to walk throught the door ")
    switch (prompt, prompt1) {
        case 'w': 
        if (randoNum(1, 5) < 3) {
            
        } else {
            var prompt1 = readline.keyIn("youe exit the cell and see a long hallway stretch out i front of you with doors lining the sides all are boarded up seems the only thing to do is keep going. press 'w' to keep walking")
        }
        break 
        case 'e':
            var club = "club"
            playerInv.push(club)
            const prompt2 = readline.keyIn("you pick the club up off the ground feeling a little better now that your armed there dosent appear to be anything else in the cell with you only he open door is of any interest. press 'w' to walk through the door" )
            break 
    }
// }
