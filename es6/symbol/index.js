// 不可以被实例化
function ClassCannotInstance() {
    // ClassCannotInstance() 可以执行
    // new ClassCannotInstance() 不可以执行
    if (this instanceof ClassCannotInstance) 
    console.log(111);
    throw new Error('不能被实例化');
}

// const instance = new ClassCannotInstance();

ClassCannotInstance();