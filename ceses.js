console.log("dadsasd");

function e(result) {
    console.log(result);
}


console.log(e("" && "aa"));

function* generatorFunction(value) {
    while (true) {
      value = yield  value * 10
    }
  }

  // Initiate a generator and seed it with an initial value
  const generator = generatorFunction(0)

  for (let i = 0; i < 5; i++) {
    console.log(generator.next(i).value)
  }

  const getUsers = asyncAlt(function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users')
    const json = yield response.json()

    return json
  })

  // Invoking the function
  getUsers().then((response) => console.log(response))

  function asyncAlt(generatorFunction) {
// Return a function
return function () {
  // Create and assign the generator object
  const generator = generatorFunction()

  // Define a function that accepts the next iteration of the generator
  function resolve(next) {
    // If the generator is closed and there are no more values to yield,
    // resolve the last value
    if (next.done) {
      return Promise.resolve(next.value)
    }

    // If there are still values to yield, they are promises and
    // must be resolved.
    return Promise.resolve(next.value).then((response) => {
      return resolve(generator.next(response))
    })
  }

  // Begin resolving promises
  return resolve(generator.next())
}
  }

  function isElementInViewport (el) {



    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

console.log(isElementInViewport(document.getElementById("outside")));

function callback() {
  console.log("visibile");
}

const options = {
  root: null,
  rootMargin: '10px',
  threshold: 1.0
};

const observer = new IntersectionObserver(callback, options)
observer.observe(document.getElementById("outside"));

const promise1 = new Promise(function(resolve, reject) {
  setTimeout(
    () => resolve('prvi'),
    4000
  );
});

const promise2 =  new Promise(function(resolve, reject) {
  setTimeout(
    () => resolve('rejected drugi'),
    1000
  );
});

const resolved = Promise.all([promise1, promise2]);
resolved.then(function resolved(result) {
  console.log(result);
}).catch(function rejected(rejection) {
  console.log(rejection);
})
.then(function resolved(result) {
  console.log('may be rejected or not');
  console.log(result);
}).finally(() => {
  console.log('tealaa');
})