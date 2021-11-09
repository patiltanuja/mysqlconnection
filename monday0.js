//let p = new Promise((resolve,reject)=>{});
//success
// p.then(()=>{})
// //error
// p.catch(()=>{})
// //one line
// p.then(()=>{

// })
// .catch(()=>{})

//
/*
NETWORK
DB call
Asynchronous
*/
function networkcall(){
    //tricky
    //return is not normal
    //return promise
}

let p = new Promise((resolve,reject)=>{
    /*complex logic
    */
   reject();
 
});
console.log(p);


p.then(()=>{
    console.log('promise resolve');

}).catch(()=>{
    console.log('promise reject');
});

console.log(typeof p);//object