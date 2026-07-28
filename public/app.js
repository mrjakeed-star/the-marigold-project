/* =================================
   🌼 THE MARIGOLD PROJECT
   JavaScript
================================= */


/* ================================
   MOBILE MENU ☰
================================ */


const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");


if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

  });

}





/* ================================
   LANGUAGE SWITCH 🇪🇸
================================ */


const languageButton =
document.querySelector("#language-toggle");


let spanish = false;


const translations = {

  "The Marigold Project":
  "El Proyecto Marigold",

  "Your community in Mexico 🇲🇽":
  "Tu comunidad en México 🇲🇽",

  "Welcome Home 🌼":
  "Bienvenido a Casa 🌼",

  "Starting a new life in Mexico is a big journey.":
  "Comenzar una nueva vida en México es un gran viaje.",

  "What do you need today? 🌱":
  "¿Qué necesitas hoy? 🌱",

  "Resource Center 📚":
  "Centro de Recursos 📚",

  "You Are Not Alone ❤️":
  "No Estás Solo ❤️",

  "Explore Mexico 🇲🇽":
  "Explora México 🇲🇽"

};



function translatePage() {

  document
  .querySelectorAll("h1,h2,h3,p,a,button")
  .forEach(element => {


    const text =
    element.innerText.trim();


    if (translations[text]) {

      element.innerText =
      translations[text];

    }


  });

}



if(languageButton){

languageButton.addEventListener(
"click",
()=>{


spanish = !spanish;


if(spanish){

translatePage();

languageButton.innerHTML =
"🇺🇸 English";

}

else{

location.reload();

}


});

}







/* ================================
   SEARCH 🔎
================================ */


const search =
document.querySelector("#search");


const searchable =
document.querySelectorAll(".card,.states a");



if(search){

search.addEventListener(
"input",
()=>{


const value =
search.value.toLowerCase();



searchable.forEach(item=>{


const text =
item.innerText.toLowerCase();



if(text.includes(value)){


item.style.display =
"block";


}

else{


item.style.display =
"none";


}



});


});

}







/* ================================
   DARK MODE 🌙
================================ */


const darkButton =
document.createElement("button");


darkButton.innerHTML =
"🌙";


darkButton.className =
"dark-toggle";


document.body.appendChild(
darkButton
);



if(localStorage.getItem("darkMode")
==="enabled"){


document.body.classList.add(
"dark"
);


darkButton.innerHTML =
"☀️";


}



darkButton.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);



if(document.body.classList.contains("dark")){


localStorage.setItem(
"darkMode",
"enabled"
);


darkButton.innerHTML =
"☀️";


}

else{


localStorage.setItem(
"darkMode",
"disabled"
);


darkButton.innerHTML =
"🌙";


}


});







/* ================================
   FAVORITES ❤️
================================ */


const cards =
document.querySelectorAll(".card");


cards.forEach(card=>{


const favorite =
document.createElement("button");


favorite.innerHTML =
"♡";


favorite.className =
"favorite-button";


card.appendChild(
favorite
);



favorite.addEventListener(
"click",
(event)=>{


event.preventDefault();



favorite.classList.toggle(
"saved"
);



if(favorite.classList.contains("saved")){


favorite.innerHTML =
"❤️";


}

else{


favorite.innerHTML =
"♡";


}



});


});







/* ================================
   SCROLL ANIMATIONS ✨
================================ */


const animated =
document.querySelectorAll(
".card, section"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);


}


});


},
{
threshold:.15
}
);



animated.forEach(item=>{


item.classList.add(
"hidden"
);


observer.observe(
item
);


});







/* ================================
   EXTRA CSS
================================ */


const effects =
document.createElement("style");



effects.innerHTML = `


.nav.open{

display:flex;

flex-direction:column;

}



.dark-toggle{

position:fixed;

right:25px;

bottom:25px;

width:55px;

height:55px;

border-radius:50%;

background:#e7a51b;

font-size:22px;

z-index:2000;

box-shadow:0 10px 25px rgba(0,0,0,.2);

}



.favorite-button{

margin-top:15px;

background:#fff0c7;

}



.favorite-button.saved{

animation:heart .4s;

}



@keyframes heart{

50%{

transform:scale(1.4);

}

}



.hidden{

opacity:0;

transform:translateY(40px);

transition:.8s;

}



.visible{

opacity:1;

transform:translateY(0);

}


`;



document.head.appendChild(effects);



console.log(
"🌼 Marigold Project loaded!"
);
