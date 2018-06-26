class Promise {
    constructor(executor) {
        // 成功的值
        // promise 状态有几种?
        // pending 等待; resolved 成功; rejected 失败;
        this.status = 'pending';
        this.reason = undefined;
        this.value = undefined;
        let r = (value) => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
            }
        }

        let rj = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        executor(r,rj);
    };

    then(onFullfilled, onRejected) {
        if (this.status === 'resolved') {
            onFullfilled(this.value);
        }
        if (this.status === 'rejected') {
            onRejected(this.reason);
        }
    };
}

module.exports = Promise;

// const a = new Promise;
// console.log(a.constructor);