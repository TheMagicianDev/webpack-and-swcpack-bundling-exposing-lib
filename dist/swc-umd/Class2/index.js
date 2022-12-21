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
    Object.defineProperty(exports, "Class2", {
        enumerable: true,
        get: function() {
            return Class2;
        }
    });
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var Class2 = /*#__PURE__*/ function() {
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
});

//# sourceMappingURL=index.js.map