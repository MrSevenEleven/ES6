// 除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
        // // main.js
        // import { area, circumference } from './circle';
        //
        // console.log('圆面积：' + area(4));
        // console.log('圆周长：' + circumference(14));
    // 上面写法是逐一指定要加载的方法，整体加载的写法如下。
        // import * as circle from './circle';
        //
        // console.log('圆面积：' + circle.area(4));
        // console.log('圆周长：' + circle.circumference(14));

// 注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。
        // import * as circle from './circle';
        //
        // // 下面两行都是不允许的
        // circle.foo = 'hello';
        // circle.area = function () {};