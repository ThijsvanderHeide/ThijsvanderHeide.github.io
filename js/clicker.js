const clickHere = document.querySelector("h1");
const upgradeHere = document.querySelector(".upgrade");
const upgradeHereAuto = document.querySelector(".upgrade2");
const numberCount = document.querySelector(".counter");

let clicks = 0;
let newClicks = 1;
let autoUpgrade = false;

clickHere.addEventListener("click", clickAdd);
upgradeHere.addEventListener("click", clickUpgrade)
upgradeHereAuto.addEventListener("click", clickUpgradeAuto)

function clickAdd() {
    clicks = clicks + newClicks;
    numberCount.textContent = clicks;
}

function clickUpgrade() {
    if (clicks >= 10) {
        clicks = clicks - 10;
        newClicks = newClicks + 1;
        numberCount.textContent = clicks;
    }
    else{
        alert("Je hebt niet genoeg clicks");
    }
}

function clickUpgradeAuto() {
    if (clicks >= 100) {
        clicks = clicks - 100;
        autoUpgrade = true;
        numberCount.textContent = clicks;
    }
    else{
        alert("Je hebt niet genoeg clicks");
    }
}

function autoClicks() {
    if (autoUpgrade == true) {
        clicks = clicks + 1;
        numberCount.textContent = clicks;
    }
}

setInterval(autoClicks, 1000);