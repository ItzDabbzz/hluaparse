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
}(this, 'continue', function (exports) {
  'use strict';

  exports.name = 'continue';
  exports.spec = [
  {
    "source": "continue",
    "result": "[1:8] no loop to continue near '<eof>'"
  },
  {
    "source": "do continue end",
    "result": "[1:12] no loop to continue near 'end'"
  },
  {
    "source": "for i=1,10 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "i"
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "NumericLiteral",
            "value": 10,
            "raw": "10"
          },
          "step": null,
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "for i=1,10 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "i"
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "NumericLiteral",
            "value": 10,
            "raw": "10"
          },
          "step": null,
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "FiveM5.4"
    }
  },
  {
    "source": "while true do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "BooleanLiteral",
            "value": true,
            "raw": "true"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "repeat continue until true",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "BooleanLiteral",
            "value": true,
            "raw": "true"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "for i=1,10 do for j=1,10 do continue end end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "i"
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "NumericLiteral",
            "value": 10,
            "raw": "10"
          },
          "step": null,
          "body": [
            {
              "type": "ForNumericStatement",
              "variable": {
                "type": "Identifier",
                "name": "j"
              },
              "start": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "end": {
                "type": "NumericLiteral",
                "value": 10,
                "raw": "10"
              },
              "step": null,
              "body": [
                {
                  "type": "ContinueStatement"
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "for k,v in pairs(t) do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "k"
            },
            {
              "type": "Identifier",
              "name": "v"
            }
          ],
          "iterators": [
            {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "pairs"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "t"
                }
              ]
            }
          ],
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "for i=1,10 do continue; end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "i"
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "NumericLiteral",
            "value": 10,
            "raw": "10"
          },
          "step": null,
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "for i=1,10 do if i==2 then continue end print(i) end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "i"
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "NumericLiteral",
            "value": 10,
            "raw": "10"
          },
          "step": null,
          "body": [
            {
              "type": "IfStatement",
              "clauses": [
                {
                  "type": "IfClause",
                  "condition": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "name": "i"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "body": [
                    {
                      "type": "ContinueStatement"
                    }
                  ]
                }
              ]
            },
            {
              "type": "CallStatement",
              "expression": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "print"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "i"
                  }
                ]
              }
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {}
  },
  {
    "source": "for i=1,10 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "i"
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "NumericLiteral",
            "value": 10,
            "raw": "10"
          },
          "step": null,
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "FiveM5.4"
    }
  },
  {
    "source": "while 0 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.2"
    }
  },
  {
    "source": "while 0 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.3"
    }
  },
  {
    "source": "while 0 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.4"
    }
  },
  {
    "source": "while 0 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "LuaJIT"
    }
  },
  {
    "source": "local continue = 1\nreturn continue",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "continue"
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        },
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Identifier",
              "name": "continue"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.1"
    }
  },
  {
    "source": "continue = 1",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "continue"
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.1"
    }
  },
  {
    "source": "t.continue = 1",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "continue"
              },
              "base": {
                "type": "Identifier",
                "name": "t"
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.1"
    }
  },
  {
    "source": "while 0 do continue end",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": [
            {
              "type": "ContinueStatement"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.1",
      "continueKeyword": true
    }
  },
  {
    "source": "local continue = 1",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "continue"
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.4",
      "continueKeyword": false
    }
  },
  {
    "source": "local continue = 1",
    "result": {
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "continue"
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    },
    "options": {
      "luaVersion": "5.1",
      "continueKeyword": false
    }
  }
];
}));
