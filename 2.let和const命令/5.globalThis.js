// JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。

        // 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
        // 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
        // Node 里面，顶层对象是global，但其他环境都不支持。

// 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

    // 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
    // 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
    // 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。


// 很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。
    // 方法一
    // (typeof window !== 'undefined'
    //     ? window
    //     : (typeof process === 'object' &&
    //         typeof require === 'function' &&
    //         typeof global === 'object')
    //         ? global
    //         : this);

    // 方法二
    // var getGlobal = function () {
    //     if (typeof self !== 'undefined') { return self; }
    //     if (typeof window !== 'undefined') { return window; }
    //     if (typeof global !== 'undefined') { return global; }
    //     throw new Error('unable to locate global object');
    // };

// 现在有一个提案，在语言标准的层面，引入globalThis作为顶层对象。也就是说，任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。