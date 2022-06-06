/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
export default class ChangeTheme {
  constructor(themeToggler) {
    this.themeToggler = themeToggler;
    this.themes = {};
  }

  addTheme(name, theme) {
    this.themes[name] = theme;
  }

  setTheme(theme) {
    this.currentTheme = this.themes[theme];
    this.themeName = theme;
    localStorage.setItem('themeName', theme);
    this.themeToggler.checked = theme !== Object.keys(this.themes)[0];
    this.currentTheme.forEach(
      (elem) => document.documentElement.style.setProperty(elem.name, elem.color),
    );
  }

  start() {
    this.themeName = localStorage.getItem('themeName') ? localStorage.getItem('themeName') : Object.keys(this.themes)[0];

    document.addEventListener('DOMContentLoaded', () => {
      this.setTheme(this.themeName);
    });

    this.themeToggler.addEventListener('change', (event) => {
      if (event.target.checked) {
        this.setTheme(Object.keys(this.themes)[1]);
      } else {
        this.setTheme(Object.keys(this.themes)[0]);
      }
    });
  }
}