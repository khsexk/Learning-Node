import * as firebase from 'node_modules/firebase/app';
import 'node_modules/firebase/auth';
import 'node_modules/firebase/firestore';

const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

var init = firebase.initializeApp({
    apiKey: "AIzaSyAOBW2QPmuwtOgFLiPCNaiDQAUkdI5RspU",
    authDomain: "nodejs-firestore-test.firebaseapp.com",
    databaseURL: "https://nodejs-firestore-test.firebaseio.com",
    projectId: "nodejs-firestore-test",
    storageBucket: "nodejs-firestore-test.appspot.com",
    messagingSenderId: "870610286904",
    appId: "1:870610286904:web:a92088901be9d3a6d869cd",
    measurementId: "G-TVKYZR0DJW"
});

var db = init.firestore();  //위 설정대로 저장소에 접속합니다.
let ref = db.collection('board');  //내가 사용할 컬렉션입니다.

let setSf = ref.doc().set( { name: 'HELLO', booleans: false, numbers: 860000 } );

app.get('/', (req, res) => {
    res.send('아두이노 파이어베이스');
  //res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});