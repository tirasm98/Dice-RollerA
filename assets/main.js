const rollButton = document.querySelector('#roll-button')
const total = document.querySelector('#total-rolls')
const resetButton = document.querySelector('#reset-button')
const allRolls = document.querySelector('#all-rolls')
const resetCounter = document.querySelector('#reset-num')
const diceNum = document.querySelector('#number-of-dice')
const rollsList = document.querySelector('#rolls-list')
const rolls = document.querySelector('#allRoles')
const dieRolls = []
let sum = 0


rollButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let dice = Number(diceNum.value);
 let counter = 1;
    while (counter < dice) {
        let dice= Math.floor(Math.random() * 6) + 1;
        dieRolls.push(dice);
        
        total.innerHTML = sum += dice;
        counter += 1;
    }

})

rollsList.addEventListener("click", function () { 
    console.log("+ button clicked");
    let counter = 0
    while (counter < dieRolls.length) {
        rollsList.innerHTML += '<li>' + dieRolls[counter] + '</li>';

        counter += 1;
        
    }

})

resetButton.addEventListener("click", function (reset) {
    console.log("+ button clicked");

    

    const newResetCounter= Number(resetCounter.innerHTML) + 1;
    resetCounter.innerHTML = newResetCounter;   

    total.innerHTML="";
    diceNum.innerHTML="";
    allRolls.innerHTML="";
    rollsList.innerHTML="";
})

