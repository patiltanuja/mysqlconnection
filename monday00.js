
//inbuilt method: : Global method
// 1000 ms = 1second
const task = () => {
    console.log("after 5 second");
};
setTimeout(task, 5000);

setTimeout(() => {
    console.log("After 2 second")
}, 2000);//After 2 sec

/* below method is asychronus because it will get execute after some time */
setTimeout(()=>console.log("after 8 second:","2"),8000);

Promise.resolve().then(() =>console.log("promise","3"));

console.log("Even it is last line","4")

