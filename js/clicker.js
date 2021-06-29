const clickHere = document.querySelector("h1");
const upgradeHere = document.querySelector("p");

let clicks = 0;
let newClicks = 1;
let upgradedClick = false;

clickHere.addEventListener("click", clickAdd);
upgradeHere.addEventListener("click", clickUpgrade)

function clickAdd() {
    clicks = clicks + newClicks;
    console.log(clicks);  
}

function clickUpgrade() {
    if (clicks >= 10) {
        clicks = clicks - 10;
        newClicks = newClicks + newClicks;
    }
    else{
        alert("Je hebt niet genoeg clicks");
    }
}