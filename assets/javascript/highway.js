const STORAGE_THEME = 'theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

function toggleTheme(theme) {
  const html = document.querySelector('html');
  const toggle = document.querySelector('.theme-toggle');

  html.dataset.theme = theme;
  localStorage.setItem(STORAGE_THEME, theme);
  toggle.dataset.icon = theme;
}

function getDefaultTheme() {
  const theme = localStorage.getItem(STORAGE_THEME);
  if (theme === THEME_LIGHT || theme === THEME_DARK) {
    return theme;
  }

  return THEME_LIGHT;
}

function listenThemeToggleEvent() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (themeToggle.dataset.icon === THEME_LIGHT) {
        toggleTheme(THEME_DARK);
      } else {
        toggleTheme(THEME_LIGHT);
      }
    });
  }
}

function listenAsideToggleEvent() {
  const app = document.querySelector('#app');
  const asideToggle = document.querySelector('.aside-toggle');

  if (asideToggle && app) {
    asideToggle.addEventListener('click', () => {
      app.classList.toggle('show-aside');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  toggleTheme(getDefaultTheme());

  listenThemeToggleEvent();
  listenAsideToggleEvent();
});
