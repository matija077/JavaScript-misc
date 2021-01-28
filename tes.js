setTimeout(() => {console.log(t);}, 4000);
setTimeout(() => {console.log(globalThis);}, 4000);
console.log(t)
console.log("test js");
console.log(this);
export default function fu() {
    console.log(a);
}
fu();
console.log(window);
var c = 5;
import test2 from './tes2.js';
/*import ("./tes2.js").then(() => {

})*/
