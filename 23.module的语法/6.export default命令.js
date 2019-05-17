// 从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
// 但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
// 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。
        // // export-default.js
        // export default function () {
        //     console.log('foo');
        // }
    // 其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
        // // import-default.js
        // import customName from './export-default';
        // customName(); // 'foo'
    // 需要注意的是，这时import命令后面，不使用大括号。

    // export default命令用在非匿名函数前，也是可以的。
        // // export-default.js
            // export default function foo() {
            //     console.log('foo');
            // }
            // // 或者写成
            // function foo() {
            //     console.log('foo');
            // }
            // export default foo;
    // 上面代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。

// export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。
// 所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。

// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
        // // 正确
        // export var a = 1;
        // // 正确
        // var a = 1;
        // export default a;
        // // 错误
        // export default var a = 1;
    // 上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。
    // 同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
        // // 正确
        // export default 42;
        // // 报错
        // export 42;

// 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
        // import _, { each, forEach } from 'lodash';
    // 对应上面代码的export语句如下。
        // export default function (obj) {
        //     // ···
        // }
        // export function each(obj, iterator, context) {
        //     // ···
        // }
        // export { each as forEach };

// export default也可以用来输出类。
        // // MyClass.js
        // export default class { ... }
        //
        // // main.js
        // import MyClass from 'MyClass';
        // let o = new MyClass();