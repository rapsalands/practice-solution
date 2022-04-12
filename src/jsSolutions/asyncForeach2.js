Array.prototype.asyncForEach = function (callback) {

    let index = 0, len = this.length;

    const next = () => {
        if (index == len) return;
        callback(this[index++], next);
    }

    next();
}

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

sampleInput.asyncForEach((si, next) => {
    const time = Math.floor(Math.random() * 500);
    setTimeout(() => {
        console.log(si.id);
        next();
    }, time);
});
