// THE MARIGOLD PROJECT
// Main JavaScript


// MOBILE MENU

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}


// LANGUAGE BUTTON

const languageButton = document.querySelector("#language-toggle");

let spanish = false;

if (languageButton) {

  languageButton.addEventListener("click", () => {

    spanish = !spanish;

    if (spanish) {

      document.querySelector("h1").innerText =
        "El Proyecto Marigold";

      document.querySelector(".logo p").innerText =
        "Tu comunidad en México";

      document.querySelector(".hero h2").innerText =
        "Bienvenido a Casa 🌼";

      languageButton.innerHTML =
        "🇺🇸 English";

    } else {

      location.reload();

    }

  });

}


// SEARCH

const search = document.querySelector("#search");

const cards = document.querySelectorAll(".cards a, .states a");

if (search) {

  search.addEventListener("input", () => {

    let value = search.value.toLowerCase();

    cards.forEach(card => {

      let text = card.innerText.toLowerCase();

      if (text.includes(value)) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

}


// DARK MODE BUTTON

const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";

darkButton.style.position = "fixed";
darkButton.style.right = "20px";
darkButton.style.bottom = "20px";
darkButton.style.zIndex = "2000";

document.body.appendChild(darkButton);


darkButton.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});


// DARK MODE STYLE

const style = document.createElement("style");

style.innerHTML = `

.dark {

  background:#171717;

  color:white;

}

.dark .header,
.dark .menu,
.dark .cards a {

  background:#252525;

}

`;

document.head.appendChild(style);


console.log("🌼 The Marigold Project loaded!");
