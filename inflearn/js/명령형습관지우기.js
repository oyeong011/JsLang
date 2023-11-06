// reduce + 복잡한 함수 + acc 보다 map + 간단한 함수 + reduce


//나이의 총합을 구해보자
const users = [
    {name : 'AA', age: 35},
    {name : 'AB', age: 36},
    {name : 'AC', age: 37},
    {name : 'AD', age: 38}
];

console.log(_.reduce((total, u) => total + u.age, 0, users))

const add = (a, b) => a + b;

console.log(_.reduce(add, L.map(u => u.age, users)))

const ages = L.map(u => u.age);

console.log(_.reduce(add, ages(users)))

//reduce 하나 보다 map + filter + reduce

console.log(
    _.reduce((total, u) => u.age >= 30 ? total : total + u.age,
    0,
    users))
    
    
console.log(
    _.reduce((total, u) => total + u.age,
    0,
    _.filter(u => u.age < 30, users)))
    
console.log(
    _.reduce(add,
        _.map(u => u.age,
            _.filter(u => u.age < 30, users))))

// 3. query, queryToObject

const obj1 = {
    a : 1,
    b : undefined,
    c : 'CC',
    d : 'DD'
};

// a=1&c==CC&d=DD

function query1(obj){
    for(const k in obj){
        const v = obj[k];
        if(v === undefined) continue;
        if(res != '') res += '&';
        res += k + '=' + v;
    }
    return res;
}
console.log(query1(obj1))


function query2(obj){
    return Object
        .entries(obj)
        .reduce((query, [k, v], i) => {
            if(v === undefined) return query
            return `${query}${i > 0 ? '&' : ''}${k}=${v}`
            return query + (i > 0 ? '&' : '') + k + '=' + v;
        }, '');
}
console.log(query2(obj1))

const join = _.curry((sep, iter) =>
    _.reduce((a, b) => `${a}${sep}${b}`, iter))

const query3 = obj => 
    join('&',
        _.map(([k, v]) => `${k}=${v}`,
            _.reject(([k,v]) => v === undefined, 
                Object.entries(obj))))
                
console.log(query3(obj1))

const query4 = obj => _.go(
    obj,
    Object.entries,
    _.reject(([_, v]) => v === undefined),
    _.map(([k, v]) => `${k}=${v}`),
    join('&')
)

console.log(query4(obj1))



// queryToObject

const split = _.curry((sep, str) => str.split(sep))

const queryToObject = _.pipe(
    split('&'),
    _.map(split('=')),
    _.map(([k, v]) => ({[k] : v})),
    _.reduce(Object.assign)
)
