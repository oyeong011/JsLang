// 1. map으로 합성하기

const f = x => x + 10;

const g = x => x - 5;

const fg = x => f(g(x));

_.go(
    10,
    fg,
    console.log);

const users = [
    {name : 'AA', age : 35},
    {name : 'AB', age : 36},
    {name : 'AC', age : 37},
    {name : 'AD', age : 38},
    {name : 'AF', age : 30},
]

const user = _.find(u => u.name == 'BB', users);
console.log(user)

_.each(console.log,
    L.take(1,
        L.filter(u => u.name == 'BB', users)))

_.go(users,
    L.filter(u => u.name == 'BB'),
    L.map(u => u.age),
    L.take(1),
    _.each(console.log)
)