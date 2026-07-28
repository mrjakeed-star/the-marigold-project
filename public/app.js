/* =====================================
   🌼 THE MARIGOLD PROJECT
   App JavaScript
===================================== */


/* =====================
   MOBILE MENU
===================== */

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if (menuButton && menu) {

  menuButton.addEventListener("click", () => {

    menu.classList.toggle("open");

  });

}





/* =====================
   LANGUAGE SWITCH
===================== */

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

  "Starting over in Mexico is a big journey.":
  "Comenzar de nuevo en México es un gran viaje.",

  "What do you need today? 🌱":
  "¿Qué necesitas hoy? 🌱",

  "Resource Center 📚":
  "Centro de Recursos 📚",

  "You Are Not Alone ❤️":
  "No Estás Solo ❤️",

  "Explore Mexico 🇲🇽":
  "Explora México 🇲🇽"

};



function translatePage(){

  document.querySelectorAll(
    "h1,h2,h3,p,a,button"
  )
  .forEach(element => {

    let text =
    element.innerText.trim();


    if(translations[text]){

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






/* =====================
   SEARCH
===================== */


const search =
document.querySelector("#search");


const items =
document.querySelectorAll(
".cards a,.states a"
);



if(search){

search.addEventListener(
"input",
()=>{


let value =
search.value.toLowerCase();



items.forEach(item=>{


let text =
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







/* =====================
   DARK MODE
===================== */


const darkButton =
document.createElement("button");


darkButton.innerHTML =
"🌙";


darkButton.className =
"dark-button";


document.body.appendChild(
darkButton
);



darkButton.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);



if(document.body.classList.contains("dark")){

darkButton.innerHTML =
"☀️";

localStorage.setItem(
"dark",
"yes"
);

}


else{


darkButton.innerHTML =
"🌙";


localStorage.setItem(
"dark",
"no"
);


}


});




if(localStorage.getItem("dark")
==="yes"){

document.body.classList.add(
"dark"
);

darkButton.innerHTML =
"☀️";

}








/* =====================
   FAVORITES ❤️
===================== */


const cards =
document.querySelectorAll(
".cards a,.states a"
);


let favorites =
JSON.parse(
localStorage.getItem(
"favorites"
)
)
|| [];



cards.forEach(card=>{


let heart =
document.createElement(
"button"
);


heart.innerHTML =
"♡";


heart.className =
"favorite";



card.appendChild(
heart
);



heart.addEventListener(
"click",
(e)=>{


e.preventDefault();


card.classList.toggle(
"liked"
);



if(card.classList.contains("liked")){

heart.innerHTML =
"❤️";


favorites.push(
card.href
);


}


else{


heart.innerHTML =
"♡";


favorites =
favorites.filter(
item =>
item !== card.href
);


}



localStorage.setItem(
"favorites",
JSON.stringify(
favorites
)
);



});


});








/* =====================
   SCROLL ANIMATIONS ✨
===================== */


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add(
"show"
);


}


});


},
{

threshold:.15

}
);



document.querySelectorAll(
"section,.cards a"
)
.forEach(item=>{


item.classList.add(
"hidden"
);


observer.observe(
item
);


});







/* =====================
   EXTRA STYLES
===================== */


const style =
document.createElement(
"style"
);


style.innerHTML = `


.menu.open{

display:flex;

flex-direction:column;

}



.dark-button{

position:fixed;

right:20px;

bottom:20px;

width:55px;

height:55px;

border-radius:50%;

background:#e7a51b;

font-size:22px;

z-index:2000;

}



.favorite{

margin-top:15px;

background:#fff1c9;

}



.hidden{

opacity:0;

transform:translateY(40px);

transition:.7s;

}



.show{

opacity:1;

transform:translateY(0);

}



.liked{

box-shadow:

0 0 25px #e7a51b;

}


`;



document.head.appendChild(style);



console.log(
"🌼 The Marigold Project loaded successfully!"
);
