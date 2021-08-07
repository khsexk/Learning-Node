module.exports = 'require Test';

require('./var');

console.log('require.cache Info');
console.log(require.cache);
console.log(require.main === module);
console.log(require.main.filename);