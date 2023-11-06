const add = (a, b) => a + b;

function f1 (limit, list){
    let acc=0;
    for(const a of list){
        if(a % 2){
            const b = a * a;
            acc += b;
            if(--limit == 0) break;
        }
    }
    console.log(acc)
    f1(3, [1,2,3,4,5,6,7,8,9,10])
}

function f2 (limit, list){
    let acc=0;
    for(const a of L.filter(a => a % 2 , list)){
        const b = a * a;
        acc += b;
        if(--limit == 0) break;
    }
    console.log(acc)
    f2(3, [1,2,3,4,5,6,7,8,9,10])
}

function f3 (limit, list){
    let acc=0;
    for(const a of L.map(a => a*a, L.filter(a => a % 2 , list))){
        acc += a;
        if(--limit == 0) break;
    }
    console.log(acc)
    f3(3, [1,2,3,4,5,6,7,8,9,10])
}

function f4 (limit, list){
    let acc=0;
    for(const a of L.take(limit, L.map(a => a*a, L.filter(a => a % 2 , list)))){
        acc += a;
    }
    console.log(acc)
    f4(3, [1,2,3,4,5,6,7,8,9,10])
}

function f5 (limit, list){
    console.log(
        _.reduce(add,
            L.take(limit,
                L.map(a => a*a, 
                    L.filter(a => a % 2 , list)))))
}
f5(3, [1,2,3,4,5,6,7,8,9,10])

function f6 (limit, list){
    _.go(list,
        L.filter(a => a % 2),
        L.map(a => a * a), 
        L.take(limit),
        _.reduce(add),
        console.log);
}
f6(3, [1,2,3,4,5,6,7,8,9,10])


// 6.while을 range로
function f7 (end){
    let i = 0;
    while(i < end) {
        console.log(i)
        ++i
    }
}
f7(10)

function f8 (end){
    _.each(console.log, L.range(end));
}
f8(10)

// 효과를  each로 구분
function f9 (end){
    _.go(
        L.range(1, end, 2),
        _.each(console.log)
    )
}
f9(10)

const join = sep => _.reduce((a, b) => `${a}${sep}${b}`)

_.go(
    L.range(1, 6),
    L.map(L.range),
    L.map(L.map(_=> '*')),
    L.map(_.reduce((a, b) => `${a}${b}`)),
    _.reduce((a, b) => `${a}\n${b}`),
    console.log)

_.go(
    L.range(2, 10),
    L.map(a => _.go(
        _.range(1, 10),
        _.map(b => `${a}x${b}=${a*b}`),
        join('\n')
    )),
    join('\n\n'),
    console.log)