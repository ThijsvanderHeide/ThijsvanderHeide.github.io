const numbersTimes = document.querySelectorAll(".calculate-times-input")
const numbersDivide = document.querySelectorAll(".calculate-divide-input")
const numbersPlus = document.querySelectorAll(".calculate-add-input")
const numbersMinus = document.querySelectorAll(".calculate-substract-input")
const calculateButton = document.querySelector(".calculate")


const calculateAll = function () {
    let totalTimes = 0;
    let totalDivide = 0;
    let totalPlus = 0;
    let totalMinus = 0;
    for (let i = 0; i < numbersTimes.length; i++) {
        const element = numbersTimes[i];
        console.log(element.value);
        if(i === 0){
            totalTimes = element.value;
        }
        else{
            totalTimes = parseInt(totalTimes) * parseInt(element.value);
            console.log(totalTimes);
            document.getElementById("times").textContent = totalTimes;

        }
    }
    for (let i = 0; i < numbersDivide.length; i++) {
        const element = numbersDivide[i];
        console.log(element.value);
        if(i === 0){
            totalDivide = element.value;
        }
        else{
            totalDivide = parseInt(totalDivide) / parseInt(element.value);
            console.log(totalDivide);
            document.getElementById("divide").textContent = totalDivide;

        }
    }
    for (let i = 0; i < numbersPlus.length; i++) {
        const element = numbersPlus[i];
        console.log(element.value);
        if(i === 0){
            totalPlus = element.value;
        }
        else{
            totalPlus = parseInt(totalPlus) + parseInt(element.value);
            console.log(totalPlus);
            document.getElementById("add").textContent = totalPlus;

        }
    }
    for (let i = 0; i < numbersMinus.length; i++) {
        const element = numbersMinus[i];
        console.log(element.value);
        if(i === 0){
            totalMinus = element.value;
        }
        else{
            totalMinus = parseInt(totalMinus) - parseInt(element.value);
            console.log(totalMinus);
            document.getElementById("minus").textContent = totalMinus;

        }
    }
    totalEverything = totalTimes + totalDivide + totalPlus + totalMinus;
    console.log(totalEverything)
    document.getElementById("finalTotal").textContent = totalEverything;
}

calculateButton.addEventListener("click", calculateAll)