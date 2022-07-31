const { keyIn } = require("readline-sync")
const readline = require("readline-sync")

function randoNum(min, max) {
    return Math.random() * (max-min) +min;
}

// function game() {
    const welcome = console.log("_-_-_-_-_- Welcome to the COLOSSAL RPG! -_-_-_-_-_")
    const nameQ = readline.question("_-_-_-_-_- What is your Name Adventurer? -_-_-_-_-_")
    var nameSave = nameQ
    const prompt = readline.keyIn("_-_-_-_-_- well "+ nameSave + " you awake to find yourslef in a dark room in what semingly is a dungeon. you find your chains unlocked and the door to your cell open you are free to leave...or so it seems. press 'W' to walk forward.")
    switch (prompt) {
        case 'w': 
        if (randoNum(1, 5) < 2) {
            var  giantRat = readline.keyIn("a Giant Rat appears before you and it does not look freindly. ")
        }
        break
    }
// }