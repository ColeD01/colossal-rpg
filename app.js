const { keyIn } = require("readline-sync")
const readline = require("readline-sync")

var giantRat = {
    health:10 ,
    name:"Giant Rat"
}
var skeleton = {
    health: 15 ,
    name: "Skeleton"
}
var prisonGuard = {
    health: 20 , 
    name: "Prison Guard"
}
var enemys = [giantRat, skeleton, prisonGuard]
var enemy = ""


// randomNum(1,3)
function randoNum(min, max) {
    // return Math.floor(Math.random() * (max-min) +min);
    return Math.floor((Math.random() * max )+ min)
}
function enemySpawn() {
    let randomEnemy = Math.floor((Math.random() * 3))
    var enemy 
    if (randomEnemy === 0) {
     enemy = giantRat
    } else if (randomEnemy === 1) {
     enemy = skeleton
    } else if (randomEnemy === 2) {
     enemy = prisonGuard
    }
    combat(enemy)
}
function combat(enemy) {
    let inCombat = true 
    var prompt = console.log("_-_-_-_-_- A "+enemy.name +" has suddenly materialized before you -_-_-_-_-_")

    while (inCombat ) {
        var combatPrompt = readline.keyIn("-_-_-_-_-_ Press 'a' to attack your foe, or Press 'r' to try and run away _-_-_-_-_-")
        switch (combatPrompt) {
            case 'a':
                enemy.health = enemy.health - randoNum(2, 11)
                player.health = player.health - randoNum(2, 11)
                console.log("_-_-_-_-_- your Foe recoils from your blow, but immeadtly attacks in return -_-_-_-_-_")
                if (player.health <= 0) {
                    console.log ("-_-_-_-_-_ You have Died _-_-_-_-_-")
                    inCombat = false 
                }
                if (enemy.health <= 0) {
                    console.log("_-_-_-_-_- Your Foe has Died. (Gold added to Inv.) -_-_-_-_-_")
                    player.gold = player.gold + randoNum(2, 8)
                    inCombat = false
                }
            break 
            case 'r':
                 
                if (randoNum(1, 2) === 1) {
                    console.log("-_-_-_-_-_ You have managed to evade and escape your Foe. _-_-_-_-_-")
                    inCombat = false

                } else {
                    console.log("_-_-_-_-_- You were not able to escape your Foe. -_-_-_-_-_")
                }
            break 
            default:
                console.log("-_-_-_-_-_ Please select one of the listed Actions only! _-_-_-_-_-")
        }
    }

    
    // if (enemy === giantRat) {

    //     var ratCombat = readline.keyIn("_-_-_-_-_-A Giant Rat appears before you looking very un-friendly. press 'a' to attack, or press 'r' to try and run.-_-_-_-_-_") 
    //     switch (ratCombat) {
    //         case 'a':
    //             while (giantRat.health > 0) {
    //             giantRat.health - randoNum(2, 9)
    //             var ratCombat2 = readline.keyIn("_-_-_-_-_-you swing at the rat making firm contact, as you do the Rat recoils and makes an attack of his own. what would you like to do, press 'a' to attack again or press 'r' to try and run.-_-_-_-_-_")
    //             }
    //             break
    //             case 'r' : 
    //             if (randoNum(1, 5) < 2) {
    //                 var ratEscaped = readline.keyIn("-_-_-_-_-_you manage to evade your foe attacks an escape further down the hall and you dont seem to have been followed. press 'w' to keep walking_-_-_-_-_-")
                    
    //             } else {
    //                 var ratFailedEscape = readline.keyIn("_-_-_-_-_-You tired to run away but the Giant Rat followed closley behind and you couldnt get away.-_-_-_-_-_")
    //                 ratCombat2
    //             }
    //     }
    // } else if (enemy === skeleton) {

    //     var skeletonCombat = readline.keyIn("-_-_-_-_-_A skeleton from the floor suddenly jolts to life and picks up the weapon it weilded in life barring your path. press 'a' to attack, or press 'r' to try and run._-_-_-_-_-")
    //     switch (skeletonCombat) {
    //         case 'a':
    //             while (skeleton.health > 0) {
    //             skeleton.health - randoNum(2, 9)
    // //             var skeletonCombat2 = readline.keyIn("_-_-_-_-_-You swing your club at the Skeleton making his bones rattle and as you do the monster swings its bony hand at you catching your arm. press 'a' to attack or 'r' to try and run.-_-_-_-_-_")
    //             }
    //             break
    //             case 'r':
    //                 if (randoNum(1, 5) < 2) {
    //                     var skeletonEscaped = readline.keyIn("_-_-_-_-_-You manage to evade your foe attacks an escape further down the hall and you dont seem to have been followed. Press 'w' to continue walking-_-_-_-_-_")
    //                 } else {
    //                     var skeletonFailedEscape = readline.keyIn("-_-_-_-_-_You tired to run away but the Skeleton followed closley behind and you couldnt get away._-_-_-_-_-")
    //                     skeletonCombat2
    //                 }
    //     }

    // } else if (enemy === prisonGuard) {

    //     var prisonGuardCombat = readline.keyIn("_-_-_-_-_-As you near a seemingly more populated part of this dungeon a guard rounds a corner and as soon as he sees you he point his sword at you and moves to attack pegging you as an escaped prisoner immeadtly. press 'a' to attack, or press 'r' to try and run.-_-_-_-_-_")

    //     switch (prisonGuardCombat) {
    //         case 'a':
    //             while(prisonGuard.health > 0) {
    //             prisonGuard.health - randoNum(2, 9)
    //             var prisonGuardCombat2 = readline.keyIn("-_-_-_-_-_You swing your club and it hits the guards armour causing the guard to gasp in pain, in response he lunges with his spear and delivers a glancing blow. press 'a' to attack, press 'r' to try and run._-_-_-_-_")
    //             }
    //             break
    //             case 'r':
    //                 if (randoNum(1, 5) < 2) {
    //                     var prisonGuardEscpaed = readline.keyIn("_-_-_-_-_-You manage to evade your foe attacks an escape further down the hall and you dont seem to have been followed. Press 'w' to continue walking-_-_-_-_-_")
    //                 } else {
    //                     var prisonGuardFEscape = readline.keyIn("-_-_-_-_-_You tired to run away but the Prison Guard followed closley behind and you couldnt get away._-_-_-_-_-")
    //                 }
    //     }
    // }
}
var player = {name: nameSave, health: 30, gold: 0 }

    const welcome = console.log("_-_-_-_-_- Welcome to the COLOSSAL RPG! -_-_-_-_-_")
    const nameQ = readline.question("_-_-_-_-_- What is your Name Adventurer? -_-_-_-_-_")
    var nameSave = nameQ

    const prompt = readline.keyIn("_-_-_-_-_- well "+ nameSave + " you awake to find yourself in a dark room in what seemingly is a dungeon. you find your chains unlocked, a club on the floor beside you, and the door to your cell open you are free to leave...or so it seems. press 'e' to grab the club. -_-_-_-_-_")
    console.log("-_-_-_-_-_You pick the club off the floor feeling a tad bit safer now that you are armed_-_-_-_-_- ")   
    
    // wrap this section in a while loop
    while (player.health > 0) {
    var prompt3 = readline.keyIn("-_-_-_-_-_the open door stands before you it is seemingly your best and only option for escape. press 'w' to walk , press 'i' to check your Inventory/health, press 'l' to end the game _-_-_-_-_-")
    switch (prompt3){
        case 'w': 
            if (randoNum(1, 6) > 3) {
                enemySpawn()
                //combat()
            } else {
                console.log("-_-_-_-_-_ A long hallway stretch out in front of you with doors lining the sides all are boarded up,you turn to see the cell you came out of has disappeared. Seems the only thing to do is keep going. press 'w' to keep walking, press 'i' to check your Inventory/health, press 'l' to end the game.-_-_-_-_-_")
            }
            break
        case 'i': 
        console.log(player)
        break

        case 'l': 
        console.log("_-_-_-_-_- GAME OVER -_-_-_-_-_")
        player.health = 0
        break

        default:
            console.log("_-_-_-_-_- Please select one of the Listed actions. -_-_-_-_-_")
    }
}

// have a while loop that