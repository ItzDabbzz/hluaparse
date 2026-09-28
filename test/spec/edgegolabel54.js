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
}(this, 'edgegolabel54', function (exports) {
  'use strict';

  exports.name = 'edgegolabel54';
  exports.spec = [
    {
      "source": "goto zz",
      "name": "should reject a goto with no visible label in 5.4",
      "options": { "luaVersion": "5.4" },
      "result": "[1:0] no visible label 'zz' for <goto>"
    },
    {
      "source": "do goto zz end",
      "name": "should reject a goto from a nested block in 5.4",
      "options": { "luaVersion": "5.4" },
      "result": "[1:3] no visible label 'zz' for <goto>"
    },
    {
      "source": "goto zz",
      "name": "should reject a goto with no visible label in 5.2",
      "options": { "luaVersion": "5.2" },
      "result": "[1:0] no visible label 'zz' for <goto>"
    }
  ];
}));
