var number = [1, 2, '3', 5];
function cleanfunc(a) {
    var clean = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            clean.push(parseFloat(b));
        }
        else {
            clean.push(b);
        }
    });
    return clean;
}
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
var returnBack = function (a) {
    if (typeof a.subject === 'string') {
        return a.subject;
    }
    else if (Array.isArray(a.subject)) {
        return a.subject[a.subject.length - 1];
    }
    else {
        return "없어요";
    }
};
