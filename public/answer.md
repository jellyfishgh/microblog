# 何睦_博益前端JS

## 非技术问题

### 1.为什么离开现在的工作？

前两年负责的产品经过10个版本的迭代更新已完成最初规划的所有功能，已趋稳定。在工作和学习过程中，发现自己更热衷于技术工作。经过自己对技术的不断学习，觉得自己能够从产品岗转向技术岗。

### 2.除了JS及JS的框架，最擅长的三种语言或技术依次是？

(Node) Java C MySQL

### 3.最满意和最不满意的任务/项目，为什么？

最满意的项目是 `App 启动时的广告页`。

自己设计的实现方案并较好的实现目标需求。开发过程中几个同事一起联合调试遇到了很多问题，最后都解决了，也为此写了自动化的脚步工具来解决调试过程中遇到的问题。

最不满意的项目是 `游戏更新日志`。

虽然实现了目标需求，但是解决方案不够优雅。自己没能推动游戏策划写出格式化的文本文件。

## 技术问题

### 1.简单编程题，写JS或伪代码

> Please write a function which takes three numbers as arguments and returns the sum of two larger numbers. (Write as elegant as possible, DO NOT use predefined method)

``` JavaScript

function sumOfTwoLargerNum() {
    let sum = 0,
        smallesNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        if (smallesNum > arguments[i]) smallesNum = arguments[i];
    }
    return sum - smallesNum;
}

```

### 2.简单编程题，写JS或伪代码

``` JavaScript
const orgData = [
    { name: 'abc', age: 30, score: 90, sex: 1, lesson: 'math' },
    { name: 'def', age: 31, score: 80, sex: 1, lesson: 'math' },
    { name: 'lmn', age: 27, score: 70, sex: 0, lesson: 'math' },
    { name: 'xyz', age: 30, score: 80, sex: 1, lesson: 'english' }
];
```
> Please write two functions to do following actions for this data set.

``` JavaScript
// return an array contains all data that (age > a given certain value)
function getArr(age) {
    var arr = [];
    orgData.map((stu) => {
        if (stu.age > age) arr.push(stu);
    });
    return arr;
}

// return an object shows the average scores group by ’lesson’ and ‘sex’
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
```

### 3.git

> 简单讲讲git的多人工作协作流程。当多人对多个模块有改动的时候，如何解决冲突？另外，如何避免这种冲突出现？

1. 每个人都需要知道自己负责的模块，以及其他人负责的模块，还有这些模块间的相互引用关系；
1. 开发完毕并本地调试通过之后就 commit;直到一个模块完成后 push 到 remote repo 的 develop branch；
1. leader review 完 code 之后合并到 product branch;

一个模块一个模块的解决。拿一个模块举例说明；
第一个同事 pull 之后 本地解决冲突，然后 commit 和 push;
然后另一个同事 同样操作，直到所有同事解决完这个模块的冲突。
然后其他模块同理。

需要每个人明确自己负责的模块以及其他人负责的模块与自己模块的引用关系。需要有一个好的开发 leader,确定好软件层次与接口设计。


### 4.es6

> 最喜欢的ES6（ECMAScript 6）的三个改变？为什么？比ES5简单多少？

1. 可以使用 const 定义不能够被再次赋值的变量；
1. 可以使用 lambda 表达式 =>
1. 字符串模版 ``

定义安全变量时更容易；
使用箭头函数，当需要使用合适的 this 时可以不再需要bind或赋值给that；
可以不再使用字符串拼接；

### 5.react

> 有没有用过ReactJS/Redux框架？若有，简单描述一下和AngularJS相比的优缺点？若没有，你觉得在一点的指导下（不是完全手把手指导，但提供一个git project），你能多久上手ReactJS/Redux？简单讲讲你的学习计划

使用过 React，没有使用过 Redux，了解 Flux。

优点：

1. React 使用了 Visual Dom ，渲染时采用 diff 策略，性能更好；
1. React 可以服务端渲染，SEO 更友好；
1. React 技术栈中包含 React Native，可以开发原生 app；

缺点：

1. 引入了 jsx 新的语法，学习时不友好；
1. 引入了 Flux 状态管理的概念，精通曲线更陡峭；

2天可以上手Redux。

学习计划：

1. 1天看官方 guide 和 referrence 文档并对照着敲 demo；
2. 1天理解 git project 项目结构，更改部分代码后运行；
