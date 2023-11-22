type Homework = {
    color?: string;
    size: number;
    readonly position: number[];
};
let 테스트용: Homework = {
    size: 123,
    position: [1, 2, 3],
};

type Name = {
    name: string;
    number: number;
    email: string;
};
type alias = Name & {
    isAdult: boolean;
};

let number: (string | number)[] = [1, 2, "3", 5];

function cleanfunc(a: (number | string)[]): number[] {
    let clean: number[] = [];

    a.forEach((b) => {
        if (typeof b === "string") {
            clean.push(parseFloat(b));
        } else {
            clean.push(b);
        }
    });
    return clean;
}

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

const returnBack = (a: { subject: string | string[] }) => {
    if (typeof a.subject === "string") {
        return a.subject;
    } else if (Array.isArray(a.subject)) {
        return a.subject[a.subject.length - 1];
    } else {
        return "없어요";
    }
};

type plus = (a: number) => number;

type member = {
    name : string,
    age : number,
    plusOne : plus,
    changeName : () => void,
}

let 회원정보 : member = {
    name: "kim",
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();

type alias2 = (a : string) => string ;

const cutZero : alias2 = (a) => {
    let b = a.split("");
    let c = b.filter((d) => d !== "0");
    let e = c.join("");
    return e;
}
type alias3 = (a : string) => number;

const removeDash : alias3 = (a) => {
    let number = a.split("-");
    let result = number.join("");

    return parseInt(result);
}

type alias4 = (a: string, b: alias2, c : alias3) => void;

let 만들함수 : alias4 = (a, b, c) => {
    let result = b(a);
    let result2 = c(result);
    console.log(result2)
}

removeDash("010-1234-5678");

cutZero("123");


const Word = class {
    num : number[];
    str : string[];

    constructor(...a : (string | number)[]){
        this.num = a.filter((b) => typeof b === "number") as number[];
        this.str = a.filter((b) => typeof b === "string") as string[];
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']