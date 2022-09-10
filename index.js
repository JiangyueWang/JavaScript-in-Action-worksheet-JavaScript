"use strict";
// variables - days of the week
function daysOfWeekFn() {
    let dayOfWeek = "Monday";
    console.log(dayOfWeek)

    dayOfWeek = "Friday";
    console.log(`I can't wait for ${dayOfWeek}`)
}

//variables - user input
function colorAnimal() {
    let animalInput = prompt("What is your favorite animal?")
    let colorInput = prompt("What is your favorite color?")
    console.log(`I've never seen a ${colorInput} ${animalInput}`)
}


// conditionals
// favoriate breakfast: nothing
// favoriate lunch: chicken tostie
// favoriate dinner: ramen
function favMeal() {
    let timeOfDay = prompt(`Time of the day is (format 0000):`)
    let favoriateMeal = ""

    if (timeOfDay < 1200) {
        favoriateMeal = "nothing";
    } else if (1200 <= timeOfDay <= 1700) {
        favoriateMeal = "chicken tostie"
    } else {
        favoriateMeal = "ramen"
    }

    console.log(`Now it is ${timeOfDay} your can enjoy your favorite meal ${favoriateMeal}`)
 
}


function randNum() {
    let randNumber = Math.floor(Math.random() * 11);
    let result = ""
    if (0<= randNumber && randNumber<= 2) {
        result = "Beatles";
    } else if (3<= randNumber && randNumber<=5) {
        result = "Stones";
    } else if (6<= randNumber && randNumber<=8) {
        result = "Floyd";
    } else if (9 <= randNumber && randNumber<=10) {
        result = "Hendrix";
    }
    console.log(`the randomn number is ${randNumber}, the result is ${result}`)
}


//loops
//for loop
function jsIsCool() {
    for (let i = 1; i <= 7; i++) {
        console.log(`${i}. JavaScript is cool!`)
    }
}

function forNumberLoop() {
    for (let i = 0; i <= 10; i++) {
        console.log(`number is ${i}`)
    }
}

function helloGoodbyLoop() {
    for (let i = 0; i <= 4; i++) {
        console.log(`hello`)
        console.log(`goodbye`)
    }
}


//while loops
function printMovieName() {
    let favMoveName = ""
    favMoveName = "Inception"
    console.log(`Your favorite movie is ${favMoveName}`)
}


function printBandName() {
    let favBandName = prompt(`What is your favorite band?`)
    return favBandName
}

function concertDisplay(musicalAct) {
    let myStreet = prompt(`Enter the name of the street you are living on: `)
    console.log(`It woudl be great if ${musicalAct} played a show on ${myStreet}`)    
}



// arrays - desktopItems

function desktopItemsFn() {
    let desktopItems = [];
    desktopItems.push("desk");
    desktopItems.push("lamp");
    desktopItems.push("laptop"); 
    console.log(`the item has index 1 in desktopItems array is ${desktopItems[1]}`)
    desktopItems.push("Infinity Gauntlet")
    for (let i = 0; i < desktopItems.length; i++) {
        console.log(`index ${i} item ${desktopItems[i]}`)
    }
}



function magicNumberFn() {
    let magicNumber = Math.floor(Math.random() * (10));

    let gameOn = true;
    while (gameOn) {
        let guess = parseInt(prompt(`please enter your guess number:`))
        if (guess === magicNumber) {
            console.log(`congratulations! the magic number is ${magicNumber}`)
            gameOn = false;
        } else if ((magicNumber-guess <= 10) || (magicNumber-guess >= -10)) {
            console.log("Getting warmer!")
            gameOn = true;
        } else if (guess < magicNumber) {
            console.log("Too Low!")
            gameOn = true;
        } else {
            console.log("Too High")
            gameOn = true;
        }
    }
}



// function calls

// daysOfWeekFn();

// colorAnimal();

// favMeal();

// randNum()

// jsIsCool();

// forNumberLoop();

// helloGoodbyLoop();

//printMovieName() 

// let favBandName = ""
// favBandName = printBandName()
// console.log(`your favorite band is ${favBandName}`)

// concertDisplay("J");

// desktopItemsFn();
magicNumberFn()