async function helloAsync1() {
    try {
        //return "asyc 1"

        throw new Error("I am custom Exception")
    }
    catch (e) {
        throw e;
    }
}

//return Promise
async function helloAsync2() { return "asyc 2" }

//return Promise
async function helloAsync3() { return "asyc 3" }


//Es6 promise Chaining:: consuming the promise
async function main() {
    try {
        let res1 = await helloAsync1();
        console.log(res1);
        let res2 = await helloAsync2();
        console.log(res2);
        let res3 = await helloAsync3();
        console.log(res3);
    }
    catch (err) {
        throw err
    }
}

main();

/*promise chaining*/

/*helloAsync1()
.then(()=>{
    return helloAsync2();
})
.then(()=>{
    return helloAsync3();
})
.then(()=>{
    console.log("final");
})*/