/*
 * Inspiration (well… copy pasting more or less) from:
 * https://github.com/ScottHamper/Cookies/blob/0.3.1/src/cookies.js#L127-L140
 *
 * Thanks Scott!
 */
(function (global) {
    'use strict';    
    /* …and here */

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () { return Collection; });
    // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Collection;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Collection = Collection;
    } else {
        global.Collection = Collection;
    }
})(this);
