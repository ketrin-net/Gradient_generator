let firstColor = document.querySelector(".first-color");
let secondColor = document.querySelector(".second-color");


function newGradient() {
    document.body.style.background = `linear-gradient(-30deg, ${firstColor.value} , ${secondColor.value}`;
}

firstColor.addEventListener("input", newGradient);
secondColor.addEventListener("input", newGradient);

console.log(firstColor);


function setHex() {
    document.getElementById('hex1').innerHTML = firstColor.value;
    document.getElementById('hex2').innerHTML = secondColor.value;
}

setHex();

firstColor.addEventListener("change", function () { setHex(); });
secondColor.addEventListener("change", function () { setHex(); });