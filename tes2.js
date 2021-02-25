var  test2 = {
    value: 3
};

export let test3 = 4;
console.log("test2");
export default test2;

export function changeA(a) {
    test2.value = a;
}