import menu from '../src/menu.json';
import postFeedItemTemplate from '../src/home.hbs';
import styles from '../src/styles.css';

// ******* Загрузка материалов с JSON *******
console.log(menu);
console.log(postFeedItemTemplate);

// const makeup = postFeedItemTemplate(menu[3]);
// console.log(makeup);
const refs = {
    postFeed: document.querySelector('.menu'),
};

// refs.postFeed.insertAdjacentHTML('beforeend', makeup);

buildMenuFeed(menu);

function buildMenuFeed(menu) {
    const makeup = menu.map(menu => postFeedItemTemplate(menu)).join('');
    console.log(makeup);
    refs.postFeed.insertAdjacentHTML('beforeend', makeup);
}

// ********** Переключить темы **********
const Theme = {
    LIGTH: 'light-theme',
    DARK: 'dark-theme',
}

const changeTheme = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');
const input = document.getElementById('theme-switch-control')

changeTheme.addEventListener('click', event => {console.log(event)})

const userInput = localStorage.getItem('theme');

    if (userInput !== null) {
        document.body.classList.add(userInput);
        if (userInput === 'dark-theme') {
            input.checked = true;
        }
    }

input.addEventListener('change', function (event) {
    if (event.target === input && input.checked === true) {
        document.body.classList.toggle(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGTH);
    }
})