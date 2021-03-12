function *inside() {
    yield 3;
    yield 4;
}

function *outside() {
    yield 1;
    let value = yield *inside();
    console.log(value);
    yield 4;
}

const it = outside();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function asyncAlt(generator) {
    return function() {
        return new Promise((resolve, reject) => {
            const generatorIterator = generator();
            let generatorIteratorResult = generatorIterator.next();
            while (!generatorIteratorResult.done) {
                console.log(generatorIteratorResult);
                const promiseResult = generatorIteratorResult.then((result) => {
                    promiseResult = result;
                })
                console.log(promiseResult);
                generatorIteratorResult = generatorIterator.next(
                    promiseResult
                )
            }
            console.log(generatorIteratorResult);
        })
    }
}


const url = "https://swapi.py4e.com/api/people/1/"
const getData = asyncAlt(function*() {
    const response = yield fetch(url);
    const result = yield response.json();
    return result;
})

getData().then((result) => {
    console.log(result);
})