(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("./Class1/index"), require("./Class2/index"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "./Class1/index",
        "./Class2/index"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {}, global.index, global.index);
})(this, function(exports, _class1, _class2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        Hero: function() {
            return Hero;
        },
        Class1: function() {
            return _class1.Class1;
        },
        Class2: function() {
            return _class2.Class2;
        }
    });
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var Hero = function Hero() {
        "use strict";
        _classCallCheck(this, Hero);
        this.c1 = new _class1.Class1();
        this.c2 = new _class2.Class2();
    };
});

//# sourceMappingURL=index.js.map