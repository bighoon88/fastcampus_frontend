// async/await
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
  
async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}
  
// async function process() {
//   console.log('안녕하세요!');
//   await sleep(1000);
//   console.log('반갑습니다!');
//   return true;
// }
async function process() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}
  
// process().then(value => {
//   console.log(value);
// });
process();
