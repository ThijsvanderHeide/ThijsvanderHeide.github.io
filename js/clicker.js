const clickHere = document.querySelector(".click-button");
const upgradeHere = document.querySelector(".upgrade-button");
const upgradeHereAuto = document.querySelector(".auto-button");
const fungrade = document.querySelector(".fun-button");
const numberCount = document.querySelector(".counter");

let buttonBox = [clickHere, upgradeHere, upgradeHereAuto, fungrade];

let clicks = 0;
let newClicks = 1;
let autoSetClicks = 0;
let upgradeMultiplier = 1;
let upgradeCost = 10;
let autoCost = 100;
let funRequired = 1000;
let autoUpgrade = false;

clickHere.addEventListener("click", clickAdd);
upgradeHere.addEventListener("click", clickUpgrade);
upgradeHereAuto.addEventListener("click", clickUpgradeAuto);
fungrade.addEventListener("click", funStart);

function clickAdd() {
    clicks = clicks + newClicks;
    numberCount.textContent = clicks;
}

function clickUpgrade() {
    if (clicks >= upgradeCost) {
        clicks = clicks - upgradeCost;
        newClicks = newClicks + upgradeMultiplier;
        numberCount.textContent = clicks;
        upgradeMultiplier++;
        upgradeCost = upgradeCost + 10;
        upgradeHere.innerHTML = "Here for an upgrade (Cost: " + upgradeCost + " Clicks)";
    }
    else{
        alert("Je hebt niet genoeg clicks");
    }
}

function clickUpgradeAuto() {
    if (clicks >= autoCost) {
        clicks = clicks - autoCost;
        autoCost = autoCost + autoCost;
        autoUpgrade = true;
        autoSetClicks++;
        numberCount.textContent = clicks;
        upgradeHereAuto.innerHTML = "Here for automated clicks (Cost: " + autoCost + " Clicks)";
    }
    else{
        alert("Je hebt niet genoeg clicks");
    }
}

function autoClicks() {
    if (autoUpgrade == true) {
        clicks = clicks + autoSetClicks;
        numberCount.textContent = clicks;
    }
}

function funStart() {
    if (clicks >= 10000) {
        setInterval(funModeOn, 500);
    }
    else{
        alert("Je hebt niet genoeg clicks")
    }
}

function funModeOn() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor="rgb("+ r +","+ g +","+ b +")";
    document.body.style.background = bgColor;
    for (let i = 0; i < buttonBox.length; i++) {
        const forButton = buttonBox[i];
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let bgColor="rgb("+ r +","+ g +","+ b +")";
        forButton.style.background = bgColor;
    }
}

setInterval(autoClicks, 1000);