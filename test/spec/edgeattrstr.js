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
}(this, 'edgeattrstr', function (exports) {
  'use strict';

  exports.name = 'edgeattrstr';
  exports.spec = [
    {
      "source": "local x <const> \"s\"",
      "name": "should reject local x <const> \"s\"",
      "options": { "luaVersion": "5.5" },
      "result": "[1:16] unexpected string '\"s\"' near '<eof>'"
    }
  ];
}));
