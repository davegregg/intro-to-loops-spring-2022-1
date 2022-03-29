console.log("This runs first.")

// Recipe: Mashed Potatoes
let potatoPile = 100  // Starting count
while (potatoPile > 0) { // Ending count
    potatoPile -= 5 // decrease/decrement by 5
    console.log("1. Peel the potatoes.")
    console.log("2. Cut the potatoes.")
    console.log("3. Boil the potatoes.")
    console.log("4. Mash the potatoes.")
    console.log("5. Mix in butter and milk.")
    console.log("SUCCESS! We now have mediocre mashed potatoes!")
}


// SPIN -> PIN -> PIN -> PIN -> etc.

function multiplyFor (x, y) {
    let product = 0
    for (let count = 0; count < y; count += 1) {
        product += x
    }
    return product
}

function multiplyWhile (x, y) {
    let product = 0
    let count = 0
    while (count < y) {
        product += x
        count += 1
    }
    return product
}

console.log(multiplyFor(10, 7))
console.log(multiplyWhile(10, 7))


// "hotdogs" -> "HoTdOgS"
// First letter index: 0
// Second letter index: 1

function isEven (num) {
    return num % 2 === 0
}

function oddCaps (string) {
    let outputString = ""
    // "index" = "position"
    for (let position = 0; position < string.length; position += 1) {
        let currentChar = string[position]
        
        if (isEven(position)) {
            outputString += currentChar.toUpperCase()
        } else {
            outputString += currentChar.toLowerCase()
        }
    }
    return outputString
}

let testResult1 = oddCaps("hotdogs")
console.assert(
    testResult1 === "HoTdOgS",
    `Test 1 failed: Expected "HoTdOgS", but got "${testResult1}"`
)

let testResult2 = oddCaps("")
console.assert(
    testResult2 === "",
    `Test 2 failed: Expected "", but got "${testResult2}"`
)

let testResult3 = oddCaps("12345")
console.assert(
    testResult3 === "12345",
    `Test 3 failed: Expected "12345", but got "${testResult3}"`
)


console.log("This runs last.")

