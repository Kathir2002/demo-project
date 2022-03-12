//calculate sum

const calculateSumElement = document.getElementById("calculate button")

function calculateSum () {
    const userNumberElement = document.getElementById("user-number")
    const enteredNumber = userNumberElement.value
    let sumUpToNumber = 0
    for (let i=0; i<=enteredNumber;i++) {
        sumUpToNumber=i+sumUpToNumber
    }
    const sum1 = document.getElementById("calculated-sum")
    sum1.textContent = sumUpToNumber
    sum1.style.display = "block"
}
calculateSumElement.addEventListener("click",calculateSum)


//highlight links
const highlightButton=document.getElementById("button2")
function highlightLinks() {
    const anchorElement = document.querySelectorAll("#highlight-links a")
    for (let anchor of anchorElement) {
        anchor.classList.add("highlight")
    }
}
highlightButton.addEventListener("click",highlightLinks)


//display user data

const dummyUserData = {
    firstName:"kathir",
    lastName:"mathavan",
    age:20
}
const userButton = document.querySelector("#user-data button")
function displayUserData() {
    const outputDataElement = document.getElementById("output-user-data")
    outputDataElement.innerHTML=""
    for (const key in dummyUserData) {
        const newUserDataElement = document.createElement("li")
        const outputText = key.toUpperCase() + ": " + dummyUserData[key]
        newUserDataElement.textContent=outputText
        outputDataElement.append(newUserDataElement)
    }
}
userButton.addEventListener("click",displayUserData)


//statiscs / dice roll

const rollDiceButtonElement = document.querySelector("#statistics button")

function rollDice () {
    return Math.floor( Math.random() *6) +1
}

function deriveNumberOfDiceRoll () {
    const targetNumberInputElement = document.getElementById("user-target-number")
    const diceRollsListElement = document.getElementById("dice-rolls")

    const enteredNumber = targetNumberInputElement.value
    diceRollsListElement.innerHTML= ""
    // console.log(enteredNumber)
    let hasRolledTargetNumber = false
    let numberOfRolls = 0
    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice()
        numberOfRolls++
        const newRollList = document.createElement("li")
        const outputTextElement = "roll" + ":" + rolledNumber
        newRollList.textContent = outputTextElement
        diceRollsListElement.append(newRollList)
        hasRolledTargetNumber = rolledNumber == enteredNumber
    }
    const outputTotalRollsElement = document.getElementById("output-total-rolls")
    const outputTargetNumberElement = document.getElementById("output-target-number")
    // console.log(outputTargetNumberElement)
    // console.log(outputTotalRollsElement)

    outputTargetNumberElement.textContent = enteredNumber
    outputTotalRollsElement.textContent = numberOfRolls
}
rollDiceButtonElement.addEventListener("click",deriveNumberOfDiceRoll)