function sumOfTwoLargerNum() {
    let sum = 0,
        smallesNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        if (smallesNum > arguments[i]) smallesNum = arguments[i];
    }
    return sum - smallesNum;
}

console.log(sumOfTwoLargerNum(2, 2, 2));

const orgData = [{
    name: 'abc',
    age: 30,
    score: 90,
    sex: 1,
    lesson: 'math'
}, {
    name: 'def',
    age: 31,
    score: 80,
    sex: 1,
    lesson: 'math'
}, {
    name: 'lmn',
    age: 27,
    score: 70,
    sex: 0,
    lesson: 'math'
}, {
    name: 'xyz',
    age: 30,
    score: 80,
    sex: 1,
    lesson: 'english'
}];

function getArr(age) {
    var arr = [];
    orgData.map((stu) => {
        if (stu.age > age) arr.push(stu);
    });
    return arr;
}

function getObj() {
    var lessonGroup = {},
        sexGroup = {};

    function groupby(group, item, value) {
        if (group[item]) {
            group[item].sum += value;
            group[item].count++;
        } else {
            group[item] = {
                sum: value,
                count: 1
            };
        }
    }

    function avg(group) {
        Object.keys(group).map((key) => {
            group[key] = group[key].sum / group[key].count;
        });
        return group;
    }
    orgData.map((stu) => {
        groupby(lessonGroup, stu.lesson, stu.score);
        groupby(sexGroup, stu.sex.toString(), stu.score);
    });
    return {
        lessonGroup: avg(lessonGroup),
        sexGroup: avg(sexGroup)
    };
}

console.log(getArr(28));
console.log(getObj());
