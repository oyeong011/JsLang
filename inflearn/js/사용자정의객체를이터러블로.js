// Map, set

let m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);
console.log(m[Symbol.iterator])
console.log(m.entries())
console.log(m.keys())
console.log(m.values())

_.go(
    m,
    L.filter(([k, v]) => v % 2),
    _.takeAll,
    console.log
)