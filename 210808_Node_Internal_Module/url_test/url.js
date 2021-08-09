// WHATWG 방식
const url = require('url');

const { URL } = url;
const myURL = new URL('https://github.com/khsexk');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------');

// 기존 노드 url 방식
const parsedUrl = url.parse('https://github.com/khsexk');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));