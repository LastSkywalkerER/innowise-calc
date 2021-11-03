/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
export default () => {
  const themeToggler = document.querySelector('.theme-toggler input[type=checkbox]');
  const lightTheme = [{
      name: '--main-color',
      color: '#fdfcd1',
    },
    {
      name: '--text-color',
      color: 'black',
    },
    {
      name: '--shadow-color',
      color: 'rgba(0, 0, 0, 0.15)',
    },
    {
      name: '--button-color',
      color: '#00000018',
    },
    {
      name: '--number-button-color',
      color: '#ffffff41',
    },
    {
      name: '--right-button-color',
      color: '#ffc40018',
    },
    {
      name: '--top-button-color',
      color: '#ff000018',
    },
    {
      name: '--clicked-button-color',
      color: '#00000056',
    },
  ];
  const darkTheme = [{
      name: '--main-color',
      color: '#3f3f3f',
    },
    {
      name: '--text-color',
      color: '#e2e2e2',
    },
    {
      name: '--shadow-color',
      color: 'rgba(0, 0, 0, 0.15)',
    },
    {
      name: '--button-color',
      color: '#494949',
    },
    {
      name: '--number-button-color',
      color: '#ffffff54',
    },
    {
      name: '--right-button-color',
      color: '#ffc40065',
    },
    {
      name: '--top-button-color',
      color: '#ff00003f',
    },
    {
      name: '--clicked-button-color',
      color: '#00000056',
    },
  ];
  const darkName = 'dark';
  const lightName = 'light';
  // eslint-disable-next-line no-extra-boolean-cast
  let themeName = !!localStorage.getItem('themeName') ? localStorage.getItem('themeName') : lightName;

  const setTheme = (theme) => {
    theme === darkTheme ? themeName = darkName : themeName = lightName;
    localStorage.setItem('themeName', themeName);
    themeToggler.checked = themeName !== darkName;
    theme.forEach((elem) => document.documentElement.style.setProperty(elem.name, elem.color));
  };

  document.addEventListener('DOMContentLoaded', () => {
    themeName === darkName ? setTheme(darkTheme) : setTheme(lightTheme);
  });

  themeToggler.addEventListener('change', (event) => {
    if (event.target.checked) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  });
}