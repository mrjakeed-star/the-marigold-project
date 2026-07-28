/* =====================================
   THE MARIGOLD PROJECT
   App JavaScript
===================================== */

/* =====================================
   MOBILE MENU
===================================== */

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}

/* =====================================
   LANGUAGE SYSTEM
===================================== */

const languageButton = document.querySelector('#language-toggle');

const translations = {
  'The Marigold Project': 'El Proyecto Marigold',

  'Your community in Mexico': 'Tu comunidad en México',

  'Welcome Home 🌼': 'Bienvenido a Casa 🌼',

  'Starting over in Mexico is a big journey.':
    'Comenzar de nuevo en México es un gran viaje.',

  'What do you need today?': '¿Qué necesitas hoy?',

  'Moving to Mexico': 'Mudarse a México',

  Housing: 'Vivienda',

  Jobs: 'Trabajo',

  'Family & Kids': 'Familia e Hijos',

  Community: 'Comunidad',

  Support: 'Apoyo',

  'Resource Center': 'Centro de Recursos',

  Paperwork: 'Documentos',

  Money: 'Dinero',

  Healthcare: 'Salud',

  Education: 'Educación',

  Pets: 'Mascotas',

  'Learn Mexico': 'Aprender México',

  'You Are Not Alone ❤️': 'No Estás Solo ❤️',

  'Explore Mexico 🇲🇽': 'Explora México 🇲🇽',

  Home: 'Inicio',

  Profile: 'Perfil',

  'Find Help': 'Buscar Ayuda',
};

function translatePage() {
  document.querySelectorAll('h1,h2,h3,p,a,button').forEach((element) => {
    let text = element.innerText.trim();

    if (translations[text]) {
      element.innerText = translations[text];
    }
  });

  if (languageButton) {
    languageButton.innerHTML = '🇺🇸 English';
  }
}

if (localStorage.getItem('marigoldLanguage') === 'spanish') {
  translatePage();
}

if (languageButton) {
  languageButton.addEventListener('click', () => {
    let current = localStorage.getItem('marigoldLanguage');

    if (current === 'spanish') {
      localStorage.setItem('marigoldLanguage', 'english');

      location.reload();
    } else {
      localStorage.setItem('marigoldLanguage', 'spanish');

      location.reload();
    }
  });
}

/* =====================================
   SEARCH
===================================== */

const search = document.querySelector('#search');

const searchItems = document.querySelectorAll('.cards a, .states a');

if (search) {
  search.addEventListener('input', () => {
    let value = search.value.toLowerCase();

    searchItems.forEach((item) => {
      let text = item.innerText.toLowerCase();

      if (text.includes(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

/* =====================================
   FAVORITES
===================================== */

const favoriteCards = document.querySelectorAll('.cards a, .states a');

let favorites = JSON.parse(localStorage.getItem('marigoldFavorites')) || [];

favoriteCards.forEach((card) => {
  let button = document.createElement('button');

  button.innerHTML = '♡';

  button.className = 'favorite';

  card.appendChild(button);

  if (favorites.includes(card.href)) {
    button.innerHTML = '❤️';
  }

  button.addEventListener('click', (event) => {
    event.preventDefault();

    event.stopPropagation();

    if (favorites.includes(card.href)) {
      favorites = favorites.filter((item) => item !== card.href);

      button.innerHTML = '♡';
    } else {
      favorites.push(card.href);

      button.innerHTML = '❤️';
    }

    localStorage.setItem('marigoldFavorites', JSON.stringify(favorites));
  });
});

/* =====================================
   DARK MODE
===================================== */

const darkButton = document.createElement('button');

darkButton.innerHTML = '🌙';

darkButton.className = 'dark-toggle';

document.body.appendChild(darkButton);

if (localStorage.getItem('marigoldDark') === 'yes') {
  document.body.classList.add('dark');

  darkButton.innerHTML = '☀️';
}

darkButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('marigoldDark', 'yes');

    darkButton.innerHTML = '☀️';
  } else {
    localStorage.setItem('marigoldDark', 'no');

    darkButton.innerHTML = '🌙';
  }
});

/* =====================================
   PAGE ANIMATIONS
===================================== */

const animated = document.querySelectorAll('.cards a, section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
  },
);

animated.forEach((item) => {
  item.classList.add('fade');

  observer.observe(item);
});

/* =====================================
   ADD EXTRA STYLES
===================================== */

const extraStyle = document.createElement('style');

extraStyle.textContent = `

.menu.show{

display:flex;

flex-direction:column;

}


.favorite{

position:absolute;

top:12px;

right:12px;

border:none;

background:white;

border-radius:50%;

width:38px;

height:38px;

font-size:20px;

cursor:pointer;

}


.cards a,
.states a{

position:relative;

}


.dark-toggle{

position:fixed;

right:20px;

bottom:25px;

width:50px;

height:50px;

border-radius:50%;

border:none;

background:#E7A51B;

font-size:22px;

cursor:pointer;

z-index:2000;

}


.fade{

opacity:0;

transform:translateY(25px);

transition:.5s;

}


.visible{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(extraStyle);

console.log('🌼 The Marigold Project loaded successfully!');
