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
}(this, 'debugdiagnostics', function (exports) {
  'use strict';

  exports.name = 'debugdiagnostics';
  // Hand-written. These exercise the parser's `debug` diagnostics, which only
  // run while a parse is failing; the scaffolder cannot express an
  // expected-error case that also needs the debug trace to execute.
  exports.spec = [
    {
      "source": "a = ",
      "name": "should log the token and position when an expression is missing",
      "options": { "luaVersion": "FiveM5.4", "debug": true },
      "result": "[1:4] <expression> expected near '<eof>'"
    },
    {
      "source": "local a = ",
      "name": "should log when a local declaration has no initialiser",
      "options": { "luaVersion": "FiveM5.4", "debug": true },
      "result": "[1:10] <expression> expected near '<eof>'"
    },
    {
      "source": "local x <bogus> = 1",
      "name": "should log and reject an attribute outside const/close",
      "options": { "luaVersion": "FiveM5.4", "debug": true },
      "result": "[1:9] unknown attribute 'bogus'"
    },
    {
      "source": "local x <const> 1",
      "name": "should reject a number where an attribute name is required",
      "options": { "luaVersion": "FiveM5.4", "debug": true },
      "result": "[1:16] unexpected number '1' near '<eof>'"
    },
    {
      "source": "a = [==[]",
      "name": "should reject an unterminated long string",
      "options": { "luaVersion": "FiveM5.4", "debug": true },
      "result": "[1:10] unfinished long string (starting at line 1) near '<eof>'"
    },
    {
      "source": "a = 1 & 2",
      "name": "should reject a bitwise operator when the version has none",
      "options": { "luaVersion": "5.1", "debug": true },
      "result": "[1:7] unexpected symbol '&' near '1'"
    }
  ];
}));
