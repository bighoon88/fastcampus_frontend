//비동기 처리

function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for(let i = 0; i< 1000000000; i++) {
    
        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start)
    }, 0);
}
console.log('작업시작');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요.')
});
console.log('다음작업');