// ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。
// 此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。
function clownsEverywhere(
    param1,
    param2,
) { /* ... */ }

clownsEverywhere(
    'foo',
    'bar',
);