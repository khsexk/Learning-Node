const firebase = require('firebase');
const config = require('./config');

const db = firebase.initalizeApp(config.firebaseConfig);

module.exports = {
    db
};