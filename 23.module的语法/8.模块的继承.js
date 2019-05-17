// 模块之间也可以继承。
// 假设有一个circleplus模块，继承了circle模块。
        // // circleplus.js
        //
        // export * from 'circle';
        // export var e = 2.71828182846;
        // export default function(x) {
        //     return Math.exp(x);
        // }
// 上面代码中的export *，表示再输出circle模块的所有属性和方法。注意，export *命令会忽略circle模块的default方法。然后，上面代码又输出了自定义的e变量和默认方法。
        // // main.js
        //
        // import * as math from 'circleplus';
        // import exp from 'circleplus';
        // console.log(exp(math.e));
// 上面代码中的import exp表示，将circleplus模块的默认方法加载为exp方法。