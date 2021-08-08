let i = 1;

setInterval(() => {
    if(i == 5){
        console.log('5 입니다');
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i += 1;
}, 100);