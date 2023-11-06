// val

const obj1 = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
}

console.log(Object.values(obj1));


L.values = function *(obj) {
    for( const k in obj) yield obj[k];
    
}

_.go(
    obj1,
    L.values,
    _.map(a => a + 10),
    L.take(2),
    _.reduce((a, b) => a + b),
    console.log
)

//entries

L.entries = function *(obj){
    for(const k in obj){
        yield [k, obj[k]]
    }
}

_.go(
    obj1,
    L.entries,
    L.filter(([_,v]) => v % 2)),
    L.map((([k, v]) => ({ [k]: v}))),
    _.reduce(Object.assign),
    _.each(console.log);

//keys

L.keys - function *(obj) {
    for(const k in obj){
        yield k;
    }
  }
_.go(
    obj1,
    L.keys,
    _.each(console.log)
);

// 어떤 값이든 이터러블 프로그래밍으로 다루기

const it = (function *() {
    let i = -1;
    while(++i < 15){
        yield 10;
        if(false) yield 10 + 20;
        yield 30;
    }
})();

console.log([...L.take(3, g1(10))])

_.go(
    g1(10),
    _.reduce((a, b) => a + b),
    console.log
);


//object

const a = [['a', 1], ['b', 2], ['c', 3]];
const b = {a:1, b:2, c:3}

const object = entries => _.go(
    entries,
    L.map(([k, v]) => ({ [k]: v})),
    _.reduce(Object.assign)
)

const object1 = entries =>
    _.reduce((obj, [k, v]) => (obj[k] = v, obj), {}, entries);

let m = new Map()
m.set('a', 10);
m.set('b', 20);
m.set('c', 30);
m.set('d', 40);

//map Object
const mapObject = (f, obj) => _.go(
    obj,
    L.entries,
    _.map(([k, v]) => [k, f(v)]),
    object
);
console.log(mapObject(a => a +10, { a:1, b:2, c:3}));

//pick

const obj2 = { a:1, b:2, c:3, d:4, e:5}

const pick = (ks, obj) => _.go(
    ks,
    _.map(k => [k, obj[k]]),
    L.reject(([k, v]) => v === undefined),
    object
)

console.log(pick(['b', 'c'], obj2))


//indexBy
const users = [
    { id : 5, name : 'AA', age : 35},
    { id : 10, name : 'AB', age : 26},
    { id : 15, name : 'AC', age : 28},
    { id : 19, name : 'AD', age : 34},
    { id : 23, name : 'AE', age : 23},
    { id : 24, name : 'AF', age : 30},
]

_.indexBy = (f, iter) => 
    _.reduce((obj, a) => (obj[f(a)] = a, obj), {}, iter)

console.log(_.indexBy(u => u.id, users));

const users2 = _.indexBy(u => u.id, users)
//indexBy 된 값을 filter하기

console.log(_.filter(({age}) => age >= 30, users))
_.go(
    users2,
    L.entries,
    L.filter(([_, {age}]) => age < 30),
    L.take(2),
    object,
    console.log
)