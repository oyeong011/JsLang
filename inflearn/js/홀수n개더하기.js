
const result = _.add(6, 4);
console.log(result);
document.addEventListener("DOMContentLoaded", function() {
    // 문서가 로드되면 이 함수들을 실행합니다.
    console.log('L: ', L);
    f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // 나머지 함수들도 필요에 따라 여기서 호출할 수 있습니다.
});
console.log('L: ', L);
// 여기에는 L을 Lazy의 별칭으로 사용하는 함수들이 포함됩니다.
// 이 함수들은 이제 L을 전역 범위에서 Lazy.js의 별칭으로 사용할 수 있습니다.
function f2(limit, list){
    let acc = 0;
    for(const a of L.filter(a => a % 2 , list)){
        const b = a * a;
        acc += b;
        if(--limit == 0) break;
    }
    console.log(acc);
}
// function f2(limit, list){
//     let acc = 0;
//     Lazy(list).filter(function(a) {
//         return a % 2;
//     }).map(function(a) {
//         return a * a;
//     }).take(limit).each(function(a) {
//         acc += a;
//     });
//     console.log(acc);
// }
// f1, f3, f4 등 다른 함수들도 여기에 포함됩니다.

// 함수 f2를 호출합니다.
f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



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
}
f1(3, [1,2,3,4,5,6,7,8,9,10])






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

// function f5 (limit, list){
//     console.log(
//         _.reduce(add,
//             // L.take(limit,
//                 L.map(a => a*a, 
//                     L.filter(a => a % 2 , list))))
// }
// f5(3, [1,2,3,4,5,6,7,8,9,10])

// function f6 (limit, list){
//     _.go(list,
//         L.filter(a => a % 2),
//         L.map(a => a * a), 
//         L.take(limit),
//         _.reduce(add),
//         console.log);
// }
// f6(3, [1,2,3,4,5,6,7,8,9,10])


// // 6.while을 range로
// function f7 (end){
//     let i = 0;
//     while(i < end) {
//         console.log(i)
//         ++i
//     }
// }
// f7(10)

// function f8 (end){
//     _.each(console.log, L.range(end));
// }
// f8(10)

// // 효과를  each로 구분
// function f9 (end){
//     _.go(
//         L.range(1, end, 2),
//         _.each(console.log)
//     )
// }
// f9(10)

// const join = sep => _.reduce((a, b) => `${a}${sep}${b}`)

// _.go(
//     L.range(1, 6),
//     L.map(L.range),
//     L.map(L.map(_=> '*')),
//     L.map(_.reduce((a, b) => `${a}${b}`)),
//     _.reduce((a, b) => `${a}\n${b}`),
//     console.log)

// _.go(
//     L.range(2, 10),
//     L.map(a => _.go(
//         _.range(1, 10),
//         _.map(b => `${a}x${b}=${a*b}`),
//         join('\n')
//     )),
//     join('\n\n'),
//     console.log)