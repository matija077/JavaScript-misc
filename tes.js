setTimeout(() => {console.log(t);}, 4000);
setTimeout(() => {console.log(globalThis);}, 4000);
//console.log(t)
console.log("test js");
//console.log(module1);
//console.log(module2);
export default function fu() {
    console.log(a);
}
fu();
console.log(window);
var c = 5;
//import test2 from './tes2.js';
import test2, { changeA, test3 } from './tes2.js';
//changeA(10);
test2.value = 40;
test3 = 100;
console.log(test2);
console.log(test3);
/*import ("./tes2.js").then(() => {

})*/
