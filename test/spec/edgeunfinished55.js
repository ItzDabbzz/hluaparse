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
}(this, 'edgeunfinished55', function (exports) {
  'use strict';

  exports.name = 'edgeunfinished55';
  exports.spec = [
    {
      "source": "a = [[x",
      "name": "should report an unfinished long string in 5.5",
      "options": { "luaVersion": "5.5" },
      "result": "[1:8] unfinished long string (starting at line 1) near '<eof>'"
    }
  ];
}));
