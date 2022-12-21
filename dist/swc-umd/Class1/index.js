(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports);
    else if (typeof define === "function" && define.amd) define([
        "exports"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {});
})(this, function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "Class1", {
        enumerable: true,
        get: function() {
            return Class1;
        }
    });
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var Class1 = /*#__PURE__*/ function() {
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
});

//# sourceMappingURL=index.js.map