(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory();
    else if (typeof define === "function" && define.amd) define([], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory();
})(this, function() {
    "use strict";
    function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
            return !!right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    }
    (function(global, factory) {
        if (typeof module === "object" && typeof module.exports === "object") factory(exports);
        else if (typeof define === "function" && define.amd) define([
            "exports"
        ], factory);
        else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {});
    })(void 0, function(exports1) {
        "use strict";
        var _export = function _export(target, all) {
            for(var name in all)Object.defineProperty(target, name, {
                enumerable: true,
                get: all[name]
            });
        };
        var _instanceof1 = function _instanceof1(left, right) {
            if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
                return !!right[Symbol.hasInstance](left);
            } else {
                return _instanceof(left, right);
            }
        };
        var _classCallCheck = function _classCallCheck(instance, Constructor) {
            if (!_instanceof1(instance, Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };
        Object.defineProperty(exports1, "__esModule", {
            value: true
        });
        _export(exports1, {
            Class1: function Class11() {
                return Class1;
            },
            Class2: function Class21() {
                return Class2;
            },
            Hero: function Hero1() {
                return Hero;
            }
        });
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
    }); //# sourceMappingURL=HeroJs.swc.umd.js.map
});


//# sourceMappingURL=HeroJs2.swc.umd.js.map