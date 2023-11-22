var 테스트용 = {
    size: 123,
    position: [1, 2, 3],
};
var number = [1, 2, "3", 5];
function cleanfunc(a) {
    var clean = [];
    a.forEach(function (b) {
        if (typeof b === "string") {
            clean.push(parseFloat(b));
        }
        else {
            clean.push(b);
        }
    });
    return clean;
}
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
var returnBack = function (a) {
    if (typeof a.subject === "string") {
        return a.subject;
    }
    else if (Array.isArray(a.subject)) {
        return a.subject[a.subject.length - 1];
    }
    else {
        return "없어요";
    }
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    var b = a.split("");
    var c = b.filter(function (d) { return d !== "0"; });
    var e = c.join("");
    return e;
};
var removeDash = function (a) {
    var number = a.split("-");
    var result = number.join("");
    return parseInt(result);
};
var 만들함수 = function (a, b, c) {
    var result = b(a);
    var result2 = c(result);
    console.log(result2);
};
removeDash("010-1234-5678");
cutZero("123");
var Word = /** @class */ (function () {
    function class_1() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        this.num = a.filter(function (b) { return typeof b === "number"; });
        this.str = a.filter(function (b) { return typeof b === "string"; });
    }
    return class_1;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
