import "./styles.css";

import menu from './menu.json';

import parsMenu from './templates/menu.hbs';

const refs = {
    listNode: document.querySelector(".js-menu"),
    themeSwitch: document.querySelector("#theme-switch-toggle"),
    body: document.body,
}
console.log(refs);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.listNode.innerHTML = menu.map(dish => parsMenu(dish));

if (localStorage.getItem("theme") === "dark-theme") {
    refs.body.classList.add(Theme.DARK);
    refs.themeSwitch.checked = true;
}
else {
    refs.body.classList.add(Theme.LIGHT);
    refs.themeSwitch.checked = false;
};

refs.themeSwitch.addEventListener('change', themeCheck)

function themeCheck(e) {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', refs.body.classList)
};


// Альтернативный вариант (через if)

// const changeTheme = function (oldTheme, newTheme) {
//     refs.body.classList.remove(oldTheme)
//     refs.body.classList.add(newTheme)
// }
// function themeChech(e) {
//     if (refs.body.classList.contains(Theme.LIGHT)) {
//         changeTheme(Theme.LIGHT, Theme.DARK)
//     } else {
//         changeTheme(Theme.DARK, Theme.LIGHT)
//     }
// };

