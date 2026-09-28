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
}(this, 'edgegotolabel55', function (exports) {
  'use strict';

  exports.name = 'edgegotolabel55';
  exports.spec = [
    {
      "source": "goto x",
      "name": "should reject a goto with no visible label in 5.5",
      "options": { "luaVersion": "5.5" },
      "result": "[1:0] no visible label 'x' for <goto>"
    }
  ];
}));
