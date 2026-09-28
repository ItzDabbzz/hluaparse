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
}(this, 'edgeglobaldeadarms', function (exports) {
  'use strict';

  exports.name = 'edgeglobaldeadarms';
  exports.spec = [
    {
      "source": "global end",
      "name": "a `global` declaration list followed by a non-function keyword is not a global function",
      "options": { "luaVersion": "5.5" },
      "result": "[1:7] <name> expected near 'end'"
    },
    {
      "source": "global nil",
      "name": "the same for `nil`, which is a keyword rather than an identifier",
      "options": { "luaVersion": "5.5" },
      "result": "[1:7] <name> expected near 'nil'"
    },
    {
      "source": "global in",
      "name": "the same for `in`, a keyword that is also a binary operator",
      "options": { "luaVersion": "5.5" },
      "result": "[1:7] <name> expected near 'in'"
    },
    {
      "source": "x = [==[abc",
      "name": "an unterminated C-style long string reports the long-string error, not the long-comment one",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:12] unfinished long string (starting at line 1) near '<eof>'"
    }
    ,
    {
      "source": "x = a ? b",
      "name": "a bare `?` is not a ternary and must not be reported as a bad `=`",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:7] unexpected symbol '?' near 'a'"
    },
    {
      "source": "?",
      "name": "a leading bare `?` raises at the first column",
      "options": { "luaVersion": "FiveM5.4" },
      "result": "[1:1] unexpected symbol '?' near 'a'"
    }
  ];
}));
