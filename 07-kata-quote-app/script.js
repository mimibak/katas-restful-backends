const state = {
  quote: [],
  author: [],
};
const pressBtn = document.querySelector("#getBtn");

pressBtn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      state.quote = jsonData.quote;
      state.author = jsonData.author;
      loadQuote();
    });
});

function loadQuote() {
  const qElement = document.querySelector("#quote");
  const aElement = document.querySelector("#author");
  qElement.innerText = state.quote;
  aElement.innerText = state.author;
}
