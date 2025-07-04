if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    let circle = document.querySelector(".circle");
    let buttonOn = false;

    button.addEventListener("click", () => {
        if (!chrome.tabs || !chrome.scripting) {
            console.error("Chrome extension APIs not available.");
            return;
        }

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) {
                console.error("No active tab found.");
                return;
            }

            const tabId = tabs[0].id;

            if (!buttonOn) {
                buttonOn = true;
                circle.style.animation = "moveToRight 1s forwards";
                button.style.animation = "transformToYellow 1s forwards";

                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["appOn.js"]
                });
            } else {
                buttonOn = false;
                circle.style.animation = "moveToLeft 1s forwards";
                button.style.animation = "transformToblue 1s forwards";

                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ["appOff.js"]
                });
            }
        });
    });
}
