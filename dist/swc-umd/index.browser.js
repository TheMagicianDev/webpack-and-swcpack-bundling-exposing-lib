/* eslint-disable no-var */ // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("./index"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "./index"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.indexBrowser = {}, global.index);
})(this, function(exports, _index) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    _index = /*#__PURE__*/ _interopRequireWildcard(_index);
    function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
            return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
            return {
                default: obj
            };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
            return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var key in obj){
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        if (cache) {
            cache.set(obj, newObj);
        }
        return newObj;
    }
    var HeroJs = _index;
    if (void 0) {
        (void 0).HeroJs = _index;
    }
    if (globalThis) {
        globalThis.HeroJs = _index;
    }
    window.HeroJs = HeroJs;
});

//# sourceMappingURL=index.browser.js.map