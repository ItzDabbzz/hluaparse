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
}(this, 'edgecont51stmt', function (exports) {
  'use strict';

  exports.name = 'edgecont51stmt';
  exports.spec = [
    {
      "source": "while true do continue end",
      "name": "should reject while true do continue end",
      "options": { "luaVersion": "5.1" },
      "result": "[1:23] '=' expected near 'end'"
    }
  ];
}));
