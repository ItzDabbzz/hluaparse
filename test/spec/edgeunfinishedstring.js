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
}(this, 'edgeunfinishedstring', function (exports) {
  'use strict';

  exports.name = 'edgeunfinishedstring';
  exports.spec = [
    {
      "source": "a = [[x",
      "name": "should report: a = [[x",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:8] unfinished long string (starting at line 1) near '<eof>'"
    }
  ];
}));
