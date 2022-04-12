function filterMap(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        const cbRes = callback(el);

        if (el === undefined && cbRes === null) {
            result.push(el);
        } else if (cbRes !== undefined) {
            result.push(cbRes);
        }
    }

    return result;
}

Array.prototype.filterMap = filterMap;

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
    undefined,
    {
        id: 6,
        name: 'Julie',
        age: 28
    },
];

function main() {
    let names = sampleInput.filterMap((si) => {
        if(si === undefined) return undefined;
        if (si?.age >= 35) return si.name;
    });

    let str = '';
    names.forEach(name => {
        const prefix = str.length ? '-' : '';
        str += `${prefix}${name}`;
    });

    console.log(str);
}

main();