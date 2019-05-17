// 讨论 Node 加载 ES6 模块之前，必须了解 ES6 模块与 CommonJS 模块完全不同。
// 它们有两个重大差异。
        // CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
        // CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
    // 第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
    // 而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
    // 第一个差异
        // CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
        // ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。
        // 等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
        // 换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。
        // 因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
            // // lib.js
            // export let counter = 3;
            // export function incCounter() {
            //     counter++;
            // }
            //
            // // main.js
            // import { counter, incCounter } from './lib';
            // console.log(counter); // 3
            // incCounter();
            // console.log(counter); // 4

    // 由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。
        // // lib.js
        // export let obj = {};
        //
        // // main.js
        // import { obj } from './lib';
        //
        // obj.prop = 123; // OK
        // obj = {}; // TypeError

    // 最后，export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。