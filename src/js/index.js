// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// const h3Element = document.getElementById('start-point');
// console.dir(h3Element);

// console.log(`
//         Soy un ${h3Element.tagName} con el id ${h3Element.id} y con clase ${h3Element.classList[0]}.
//         Mi padre es un ${h3Element.parentElement.tagName} con el id ${h3Element.parentElement.id} y con clase ${h3Element.parentElement.classList[0]}.
//         Mis hermanos son un ${h3Element.previousElementSibling.tagName} con el id ${h3Element.previousElementSibling.id} y con clase ${h3Element.previousElementSibling.classList[0]} y ${h3Element.previousElementSibling.classList[1]}
//         y un ${h3Element.parentElement.children[0].tagName} con el id ${h3Element.parentElement.children[0].id} y con clase ${h3Element.parentElement.children[0].classList[0]} y ${h3Element.parentElement.children[0].classList[1]}.
//     `);

// ----- Second PART

// const item1LiElement = document.getElementById('first-list');
// const item2LiElement = document.getElementById('second-list');

// const firstLine = item1LiElement.textContent;
// const secondLine = item2LiElement.textContent;

// item1LiElement.textContent = secondLine;
// item2LiElement.textContent = firstLine;

// ----- tirdh PART

const headerElement = document.querySelectorAll('header').length;
const h1Element = document.querySelectorAll('h1').length;
const h2Element = document.querySelectorAll('h2').length;
const pElement = document.querySelectorAll('p').length;
const imgElement = document.querySelectorAll('img').length;
const spanElement = document.querySelectorAll('span').length;
const articleElement = document.querySelectorAll('article').length;
const sectionElement = document.querySelectorAll('section').length;
const footerElement = document.querySelectorAll('footer').length;
const navElement = document.querySelectorAll('nav').length;
const ulElement = document.querySelectorAll('ul').length;
const liElement = document.querySelectorAll('li').length;
const aElement = document.querySelectorAll('a').length;

console.log(`
    Hay ${headerElement} Header, ${h1Element} H1, ${h2Element} H2, ${pElement} P, ${aElement} a, ${imgElement} img, ${sectionElement} section, ${spanElement} span, ${articleElement} article, ${navElement} nav, ${ulElement} ul, ${liElement} li y ${footerElement} footer
    `);
