const state = {
  linkedinUser: [],
};
let count = 0;

function kopf() {
  const header = document.querySelector("header");
  const phead = document.createElement("p");
  header.innerHTML = "";
  header.appendChild(phead);
  phead.innerText = count + " " + "pending invitation";
}
kopf();

function getContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => response.json())
    .then((jsonData) => {
      state.linkedinUser = jsonData;
      renderContacts();
    });
}

getContacts();

function renderContacts() {
  const main = document.querySelector("main");

  for (let contact of state.linkedinUser) {
    const bgImg = document.createElement("article");

    const card = document.createElement("section");

    const pic = document.createElement("img");
    pic.src = contact.picture;
    card.appendChild(pic);

    const profession = document.createElement("p");
    profession.innerText = contact.name.title;
    card.appendChild(profession);

    const firstName = document.createElement("p");
    firstName.innerText = contact.name.first;
    card.appendChild(firstName);

    const lastName = document.createElement("p");
    lastName.innerText = contact.name.last;
    card.appendChild(lastName);

    const title = document.createElement("p");
    title.innerText = contact.title;
    card.appendChild(title);

    const backgroundImage = document.createElement("img");
    backgroundImage.src = contact.backgroundImage;
    bgImg.appendChild(backgroundImage);

    main.appendChild(card);
    main.appendChild(bgImg);

    const mutFri = document.createElement("p");
    mutFri.innerText = contact.mutualConnections + " " + "mutual connections";
    card.appendChild(mutFri);

    const btn = document.createElement("button");
    btn.innerText = "Connect";
    card.appendChild(btn);
    btn.addEventListener("click", () => {
      if (btn.innerText === "Connect") {
        btn.innerText = "Pending";
        count += 1;
      } else if (btn.innerText === "Pending") {
        btn.innerText = "Connect";
        count -= 1;
      }
      kopf();
    });
  }
}

// You will rebuild the suggested contacts widget of LinkedIn.

/* If you click the close / remove button on a suggested contact the contact is removed and ad new suggestion is added to the end of the suggestion panel
 The connect feature should be (dummy) implemented (you do not actually connect with anyone) in the browser - no api calls required
 The number of pending requests should be persisted between browser sessions
 
 While LinkedIn shows the number of connections OR the company name you should always show the number of mutual connections
 */
