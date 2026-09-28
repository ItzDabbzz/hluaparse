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
}(this, 'edgeunfinishedcomment', function (exports) {
  'use strict';

  exports.name = 'edgeunfinishedcomment';
  exports.spec = [
    {
      "source": "a = --[[x",
      "name": "should report: a = --[[x",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:10] unfinished long comment (starting at line 1) near '<eof>'"
    }
  ];
}));
