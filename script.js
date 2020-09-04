window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#e9e507",
        "#d36060",
        "#c8e757",
        "#1b0ce7",
        "#023942",
        "#ec8c0d",
        "#3fe70ce7",
        "#ee3c3c",
        "#cd0ce7",
        "#09a4ec",
        "#de0d64",
        "#ffb400"
    ];


    //lets get going with the sound here 
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    //making bubbles 
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease ";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
});