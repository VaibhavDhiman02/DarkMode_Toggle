


let body = document.querySelector("body");
let istoggle = false;

body.onclick = () => {
    istoggle = !istoggle;
    body.style.setProperty("--value",
        istoggle ? "black" : "white"
    );
}