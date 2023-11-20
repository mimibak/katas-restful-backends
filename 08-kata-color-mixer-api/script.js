const head = document.querySelector("header");
const hexaCode = document.querySelector("#hexacode");
const changeBod = document.querySelector("body");
const randomBtn = document.querySelector("#randomBtn");
const clrElement = document.querySelector("#hexacode");
const rValue = document.querySelector("#red");
const bValue = document.querySelector("#blue");
const gValue = document.querySelector("#green");
const rndClr = {
  color: [],
  rgbRed: [],
  rgbBlue: [],
  rgbGreen: [],
};
bgColor();

function bgColor() {
  const redSlide = document.getElementById("red").value;
  const blueSlide = document.getElementById("blue").value;
  const greenSlide = document.getElementById("green").value;
  changeBod.style.backgroundColor =
    "rgb(" + [redSlide, blueSlide, greenSlide].join(",") + ")";
  valueHex(redSlide, blueSlide, greenSlide);
}

head.addEventListener("click", bgColor);

function valueHex(r, g, b) {
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);

  hexaCode.innerText = "#" + r + g + b;
}

randomBtn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      rndClr.color = jsonData.color;
      rndClr.rgbRed = jsonData.rgb.r;
      rndClr.rgbBlue = jsonData.rgb.b;
      rndClr.rgbGreen = jsonData.rgb.g;

      changeBod.style.backgroundColor =
        "rgb(" +
        [rndClr.rgbRed, rndClr.rgbBlue, rndClr.rgbGreen].join(",") +
        ")";

      hexaCode.innerText =
        "#" + rndClr.rgbRed + rndClr.rgbBlue + rndClr.rgbGreen;
    });
});
