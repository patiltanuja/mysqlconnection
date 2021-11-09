/*  To read data from command line
  Nodejs  ---> internal module ---->readline-sync

  e.g. java --> scanner , bufferreader
*/
function Pyramid(num){

    for(let x=0;x<num;x++)
    {
        let str="";
        for(let y=0;y<=x; y++)
        {
          str=str+"*";
        }
        console.log(str);
    }

}
console.log("");
let readline = require('readline-sync');
let num = readline.question("Enter the number for height of pyramid that you want to print?\n");
console.log("");
Pyramid(num);
console.log("");