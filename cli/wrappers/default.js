(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobuf"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require(%DEPENDENCY%));

})(this, function($protobuf) {
    "use strict";

    %OUTPUT%

    return $protobuf.roots[%ROOT%] = $root;
});
