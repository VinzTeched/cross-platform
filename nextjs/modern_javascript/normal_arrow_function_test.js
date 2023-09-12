console.log(this);

const testObj = {
    func1: function() {
        console.log('func1', this)
    },

    func2: () => {
        console.log('func2', this)
    },
};

testObj.func1();
testObj.func2();

