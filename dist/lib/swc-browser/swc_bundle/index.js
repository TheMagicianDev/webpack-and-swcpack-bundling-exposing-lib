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
    return Class1.prototype.go = function() {
        return 1;
    }, Class1;
}();
var Class2 = function() {
    "use strict";
    function Class2() {
        _classCallCheck(this, Class2);
    }
    return Class2.prototype.start = function() {
        return 1;
    }, Class2;
}();
var Hero = function Hero() {
    "use strict";
    _classCallCheck(this, Hero), this.c1 = new Class1(), this.c2 = new Class2();
};
const mod = {
    Class1: Class1,
    Class2: Class2,
    Hero: Hero
};
this && (this.HeroJs = mod), globalThis && (globalThis.HeroJs = mod), window.HeroJs = mod;
