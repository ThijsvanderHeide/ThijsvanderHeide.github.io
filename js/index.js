const button = document.querySelector("#button");

let themeLight = JSON.parse(localStorage.getItem("storedTheme"));
const themeLightBag = localStorage.getItem("storedTheme");


let lightModeOn = false;
let autoMode = false;
const toggleTheme = function () {
    if(themeLight){
        themeLight = false;
    } 
    else{
        themeLight = true;
    } 
    localStorage.setItem("storedTheme", themeLight);
    const elements = document.querySelectorAll(
        "html, h1, h2, h3, h4, h5, li, body, .normal-text" )
    for(let i = 0; i < elements.length; i++ ) {
    const element = elements[i];
    element.classList.toggle("dark-mode");
    }
    if(lightModeOn == false){
        lightModeOn = true
        }
        else{
        lightModeOn = false
        }
        console.log(lightModeOn);
};  

console.log(localStorage.getItem("storedTheme"))

if(themeLight){
    const elements = document.querySelectorAll(
        "h1, h2, h3, h4, h5, li, body, .normal-text" )
    for(let i = 0; i < elements.length; i++ ) {
    const element = elements[i];
    element.classList.toggle("dark-mode");
    }
    if(lightModeOn == false){
        lightModeOn = true
        }
        else{
        lightModeOn = false
        }
        console.log(lightModeOn);
};

button.addEventListener('click', toggleTheme);

 const timedTheme = function () {
     const date = new Date();
     console.log(date);
     if(date.getSeconds() < 17 && date.getSeconds() > 7  ){
         if(lightModeOn == false && autoMode == false){
         toggleTheme();
         autoMode = true;
         }
         else{
            if(lightModeOn == true && autoMode == false){
                autoMode = true;
             }   
         }
     }
     else{
        if(lightModeOn == true && autoMode == true){
            toggleTheme();
            autoMode = false;
        }
     }
    };

 setInterval(timedTheme, 1000);