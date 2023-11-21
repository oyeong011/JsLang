type homework = {
    color? : string;
    size : number;
    readonly position : number[];
}
let 

let number : (string | number)[] = [1, 2, '3', 5];


function cleanfunc(a:(number | string)[]) : number[] {
    let clean : number[] = [];
    
    a.forEach((b) => {
        if(typeof b === 'string'){
            clean.push(parseFloat(b));
        } else {
            clean.push(b)
        }
    })
    return clean;
}



let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

const returnBack = (a: {subject : string | string[]}) => {
    if(typeof a.subject === 'string'){
        return a.subject
    } else if(Array.isArray(a.subject)){
        return a.subject[a.subject.length - 1]
    } else {
        return "없어요"
    }
}

