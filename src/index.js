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

const changeTheme = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');


changeTheme.addEventListener('click', changeThemeFunc)

function changeThemeFunc(event) {
    if (event.target === changeTheme) {
        body.classList.toggle('dark-theme');
        saveTheme();
    }
}

    function saveTheme() {
        if (changeTheme.checked) {
            localStorage.setItem('changeTheme', 'Black theme');
        } else {
            localStorage.setItem('changeTheme', 'White theme');
        }
    }
const isChecked = localStorage.getItem('changeTheme');

function reload_Theme() {
    if(isChecked === 'checked') {
        body.classList.add('dark-theme');
        changeTheme.checked = true;
    }
}
reload_Theme();
