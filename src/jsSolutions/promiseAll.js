class SimplePromise {

    static all = (...promises) => {

        return new Promise((resolve, reject) => {
            let count = 0;
            const result = [];

            function process(res, i) {
                count++;
                result[i] = res;

                if (count === promises.length) {
                    return resolve(result);
                }
            }

            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i];
                Promise.resolve(promise)
                    .then(res => process(res, i))
                    .catch(error => process(error, i));
            }
        });
    }
}

const p1 = Promise.resolve(10);

const p2 = new Promise((res, rej) => {
    setTimeout(() => res(20));
});

const p3 = 30;

const p4 = new Promise((res, rej) => {
    rej(-10);
});

// Promise.all([p1, p2, p3, p4]).then(res => {
//     console.log(res[0]);
//     console.log(res[1]);
//     console.log(res[2]);
// });

console.log('----------------------------------------');

SimplePromise.all(p1, p2, p3, p4).then(res => {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
    console.log(res[3]);
});
