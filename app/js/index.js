const beautify = require('js-beautify').js_beautify;

const text = document.querySelector('#main-text');
const button = document.querySelector('#main-button');

button.addEventListener('click', () => {
  text.value = beautify(text.value, {
    indent_size: 2
  });
});
