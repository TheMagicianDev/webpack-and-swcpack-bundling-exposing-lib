function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var Class1 = function() {
    "use strict";
    function Class1() {
        _classCallCheck(this, Class1);
    }
    var _proto = Class1.prototype;
    _proto.go = function go() {
        return 1;
    };
    return Class1;
}();
var Class2 = function() {
    "use strict";
    function Class2() {
        _classCallCheck(this, Class2);
    }
    var _proto = Class2.prototype;
    _proto.start = function start() {
        return 1;
    };
    return Class2;
}();
var Hero = function Hero() {
    "use strict";
    _classCallCheck(this, Hero);
    this.c1 = new Class1();
    this.c2 = new Class2();
};
export { Class1 as Class1 };
export { Class2 as Class2 };
export { Hero as Hero };
