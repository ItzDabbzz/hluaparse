(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'edgeattrname', function (exports) {
  'use strict';

  exports.name = 'edgeattrname';
  exports.spec = [
    {
      "source": "global <1>",
      "name": "should reject a number where an attribute name is required",
      "options": { "luaVersion": "5.5" },
      "result": "[1:8] <name> expected near '1'"
    }
  ];
}));
