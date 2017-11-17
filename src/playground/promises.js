const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'This is my resolved data',
            age: 27
    })
 // reject('Snth went wrong!');
}, 1500);
});

console.log('before');

 
promise.then((data) => {;
    console.log('1',data);

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my other promise');
    }, 3500);
});
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error', error);
});
console.log("after");