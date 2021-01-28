//import module2 from './module2.js'

var module1 = {
    a: 3
};
let t = 34;
var as ="a";


//export { module1 };


console.log("module");
//setTimeout(() => {import module2 from './module2.js'});



import('./module2.js').then(function resolved(result) {
    //console.log(result);
})
