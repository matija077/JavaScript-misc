//import module2 from './module2.js'

var module1 = {
    a: 3
};
let t = 34;


//export { module1 };


console.log("module");


import('./module2.js').then(function resolved(result) {
    console.log(result);
})
