const clickHere = document.querySelector(".click-button");
const upgradeHere = document.querySelector(".upgrade-button");
const upgradeHereAuto = document.querySelector(".auto-button");
const fungrade = document.querySelector(".fun-button");
const numberCount = document.querySelector(".counter");
const flickHere = document.querySelector(".flick-button")
const flickAuto = document.querySelector(".flick-auto-button")
const flickCount = document.querySelector(".flick-counter")

let buttonBox = [clickHere, upgradeHere, upgradeHereAuto, fungrade];

let clicks = 0;
let newClicks = 1;
let autoSetClicks = 0;
let upgradeMultiplier = 1;
let upgradeCost = 10;
let autoCost = 100;
let funRequired = 1000;
let autoUpgrade = false;
let autoFlickUpgrade = false;

let flicks = 0;

clickHere.addEventListener("click", clickAdd);
upgradeHere.addEventListener("click", clickUpgrade);
upgradeHereAuto.addEventListener("click", clickUpgradeAuto);
fungrade.addEventListener("click", funStart);
flickHere.addEventListener("click", flickAdd)
flickAuto.addEventListener("click", flickAutoAdd)

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
        upgradeCost = upgradeCost * 2;
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
        clicks = clicks - 10000;
        numberCount.textContent = clicks;
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

function flickAdd() {
    if (clicks >= 5000) {
        clicks = clicks - 5000;
        numberCount.textContent = clicks;
        flicks = flicks + 1
        flickCount.textContent = flicks;
    }
    else {
        alert("Je hebt niet genoeg clicks")
    }
}

function flickAutoAdd() {
    if (flicks >= 10) {
        flicks = flicks - 10;
        autoFlickUpgrade = true;
        flickCount.textContent = flicks;
    }
    else{
        alert("Je hebt niet genoeg flicks");
    }
}

function autoFlicks() {
    if (autoFlickUpgrade == true) {
        flicks = flicks + 1;
        flickCount.textContent = flicks;
    }
}

setInterval(autoClicks, 1000);
setInterval(autoFlicks, 1000);