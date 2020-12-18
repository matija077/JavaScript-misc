function a (promise) {
    console.log("usao u unufkinciju");
    return new Promise(function(resolve, reject) {
      promise.then(result => {
        console.log("promise then");
        resolve(result);
      }).catch(error => {
        console.log("promise catch");
        reject(error);
      }).finally( () => {
        console.log("promise finally");
      })
    })
  }

  var promise = new Promise(function(resolve, reject) {
    console.log("usao u promise");
    resolve("rejected");
  })

  var wrappedPromise = a(promise).
    then((result) => {
      console.log("wrapped then");
      console.log(result);
    }).catch(error => {
    console.log("wrapped catch");
      console.log(error);
    }).finally(() => {
      console.log("wrapped finnaly")
    })

