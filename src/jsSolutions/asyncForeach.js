/** This handles scenario when each element in array is 
 * processed with delay. Example: every element in array is passed to setTimeout. This is not really a real-time scenario method.
 * 
 * See asyncForEach2 for scenario where each item is API call
 * and is resolved with some delay.
 */

function asyncForEach(callback) {

    const len = this.length;
    let index = 0;

    const resolve = (cb) => {
        cb(this[index++]);
        if(index == len) return;
        resolve(cb);
    }

    callback(resolve);
}

Array.prototype.asyncForEach = asyncForEach;

const sampleInput = [
    {
        id: 1,
        name: 'Smith',
        age: 35
    },
    {
        id: 2,
        name: 'John',
        age: 42
    },
    {
        id: 3,
        name: 'Ricky',
        age: 32
    },
    {
        id: 4,
        name: 'Grame',
        age: 30
    },
    {
        id: 5,
        name: 'Johana',
        age: 42
    },
    {
        id: 6,
        name: 'Julie',
        age: 28
    },
];

function main() {
    // sampleInput.forEach(si => console.log(si.id));

    sampleInput.asyncForEach((resolve) => {
        const time = Math.floor(Math.random() * 10);
        setTimeout(() => resolve((item) => console.log(item.id)), time);
    });

}

main();