function customMap (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        result.push(callback(el));
    }

    return result;
}

Array.prototype.customMap = customMap;

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
    let ids = sampleInput.map(si => si.id);
    let names = sampleInput.customMap((si) => si.name);
    console.log(names.join('-'));
}

main();