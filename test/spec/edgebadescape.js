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
}(this, 'edgebadescape', function (exports) {
  'use strict';

  exports.name = 'edgebadescape';
  exports.spec = [
    {
      "source": "a = \"\\uZZZZ\"",
      "name": "should report: a = \"\\uZZZZ\"",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:9] missing '{' near '\\uZ'"
    },
    {
      "source": "a = \"\\UZZZZZZZZ\"",
      "name": "should report: a = \"\\UZZZZZZZZ\"",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:7] invalid escape sequence near '\\U'"
    },
    {
      "source": "a = \"\\u{41\"",
      "name": "should report: a = \"\\u{41\"",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:11] missing '}' near '\\u{41\"'"
    }
  ];
}));
