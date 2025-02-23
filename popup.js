if(document.querySelector(".popup")){
const button = document.querySelector(".button");
let circle = document.querySelector(".circle");
let buttonOn = false;
button.addEventListener("click", () => {
    if (!buttonOn) {
        buttonOn = true;
        circle.style.animation = "moveToRight 1s forwards";
        button.style.animation = "transformToYellow 1s forwards";
       chrome.tabs.executeScript({
            file: "appOn.js"
        }
        )
    }
    else {
        buttonOn = false;
        circle.style.animation = "moveToLeft 1s forwards";
        button.style.animation = "transformToblue 1s forwards"
       chrome.tabs.executeScript({
            file: "appOff.js"
            }
        )
    }
})
}