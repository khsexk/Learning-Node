const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.google.com/search?q=alkorithm&oq=alkorithm&aqs=chrome..69i57j0i10i433j0i10l8.2461j0j15&sourceid=chrome&ie=UTF-8');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));