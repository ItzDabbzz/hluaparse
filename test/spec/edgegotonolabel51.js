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
}(this, 'edgegotonolabel51', function (exports) {
  'use strict';

  exports.name = 'edgegotonolabel51';
  exports.spec = [
    {
      "source": "goto zz",
      "name": "should reject a goto that resolves to an assignment in 5.1",
      "options": { "luaVersion": "5.1" },
      "result": "[1:5] '=' expected near 'zz'"
    }
  ];
}));
