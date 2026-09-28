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
}(this, 'edgesafenav51', function (exports) {
  'use strict';

  exports.name = 'edgesafenav51';
  exports.spec = [
    {
      "source": "a = t?.x",
      "name": "should reject safe navigation in a version without it",
      "options": { "luaVersion": "5.1" },
      "result": "[1:6] unexpected symbol '?' near 't'"
    }
  ];
}));
