(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    // While CommonJS defines `module` as an object, component define it as a
    // function
    , freeModule = (typeof module === 'object' || typeof module === 'function') &&
        module && module.exports === freeExports && module;

  // Detect free variable `global`, from Node.js or Browserified code, and use
  // it as `root`
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)
    root = freeGlobal;

  // Some AMD build optimizers, like r.js, check for specific condition
  // patterns like the following:
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  }
  // check for `exports` after `define` in case a build optimizer adds an
  // `exports` object
  else if (freeExports && !freeExports.nodeType) {
    // in Node.js or RingoJS v0.8.0+
    if (freeModule) factory(freeModule.exports);
    // in RingoJS v0.7.0-
    else factory(freeExports);
  }
  // in a browser or Rhino
  else {
    factory((root[name] = {}));
  }
}(this, 'misc', function (exports) {

  exports.name = 'misc';
  exports.options = { };
  // An array, like every other spec file: the runner iterates
  // `for (i = 0; i < tests.length; ++i)`, which silently runs zero times
  // against an object. This file previously exported an object keyed by
  // source, so all six of its cases never ran.
  exports.spec = [
    {
      "source": "function foo.bar:baz(a) goto foo ::foo:: end local function a() local a, b ::c:: for a,b in c.d:e() do end end do while a do end repeat until 0 end for a = 1, 1 do end a = function() end",
      "options": {"luaVersion": "5.2"},
      "name": "should not scope by default",
      "result":     {
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "MemberExpression",
            "indexer": ":",
            "identifier": {
              "type": "Identifier",
              "name": "baz",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 17
                },
                "end": {
                  "line": 1,
                  "column": 20
                }
              },
              "range": [
                17,
                20
              ]
            },
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "bar",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  13,
                  16
                ]
              },
              "base": {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  9,
                  12
                ],
                "isLocal": false
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 16
                }
              },
              "range": [
                9,
                16
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 20
              }
            },
            "range": [
              9,
              20
            ]
          },
          "isLocal": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 21
                },
                "end": {
                  "line": 1,
                  "column": 22
                }
              },
              "range": [
                21,
                22
              ],
              "isLocal": true
            }
          ],
          "body": [
            {
              "type": "GotoStatement",
              "label": {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 29
                  },
                  "end": {
                    "line": 1,
                    "column": 32
                  }
                },
                "range": [
                  29,
                  32
                ]
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 24
                },
                "end": {
                  "line": 1,
                  "column": 32
                }
              },
              "range": [
                24,
                32
              ]
            },
            {
              "type": "LabelStatement",
              "label": {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 35
                  },
                  "end": {
                    "line": 1,
                    "column": 38
                  }
                },
                "range": [
                  35,
                  38
                ],
                "isLocal": true
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 33
                },
                "end": {
                  "line": 1,
                  "column": 40
                }
              },
              "range": [
                33,
                40
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 44
            }
          },
          "range": [
            0,
            44
          ]
        },
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 60
              },
              "end": {
                "line": 1,
                "column": 61
              }
            },
            "range": [
              60,
              61
            ],
            "isLocal": true
          },
          "isLocal": true,
          "parameters": [],
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 70
                    },
                    "end": {
                      "line": 1,
                      "column": 71
                    }
                  },
                  "range": [
                    70,
                    71
                  ],
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 73
                    },
                    "end": {
                      "line": 1,
                      "column": 74
                    }
                  },
                  "range": [
                    73,
                    74
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 64
                },
                "end": {
                  "line": 1,
                  "column": 74
                }
              },
              "range": [
                64,
                74
              ]
            },
            {
              "type": "LabelStatement",
              "label": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 77
                  },
                  "end": {
                    "line": 1,
                    "column": 78
                  }
                },
                "range": [
                  77,
                  78
                ],
                "isLocal": true
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 75
                },
                "end": {
                  "line": 1,
                  "column": 80
                }
              },
              "range": [
                75,
                80
              ]
            },
            {
              "type": "ForGenericStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 85
                    },
                    "end": {
                      "line": 1,
                      "column": 86
                    }
                  },
                  "range": [
                    85,
                    86
                  ],
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 87
                    },
                    "end": {
                      "line": 1,
                      "column": 88
                    }
                  },
                  "range": [
                    87,
                    88
                  ],
                  "isLocal": true
                }
              ],
              "iterators": [
                {
                  "type": "CallExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ":",
                    "identifier": {
                      "type": "Identifier",
                      "name": "e",
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 96
                        },
                        "end": {
                          "line": 1,
                          "column": 97
                        }
                      },
                      "range": [
                        96,
                        97
                      ]
                    },
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "d",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 94
                          },
                          "end": {
                            "line": 1,
                            "column": 95
                          }
                        },
                        "range": [
                          94,
                          95
                        ]
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "c",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 92
                          },
                          "end": {
                            "line": 1,
                            "column": 93
                          }
                        },
                        "range": [
                          92,
                          93
                        ],
                        "isLocal": false
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 92
                        },
                        "end": {
                          "line": 1,
                          "column": 95
                        }
                      },
                      "range": [
                        92,
                        95
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 92
                      },
                      "end": {
                        "line": 1,
                        "column": 97
                      }
                    },
                    "range": [
                      92,
                      97
                    ]
                  },
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 92
                    },
                    "end": {
                      "line": 1,
                      "column": 99
                    }
                  },
                  "range": [
                    92,
                    99
                  ]
                }
              ],
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 81
                },
                "end": {
                  "line": 1,
                  "column": 106
                }
              },
              "range": [
                81,
                106
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 45
            },
            "end": {
              "line": 1,
              "column": 110
            }
          },
          "range": [
            45,
            110
          ]
        },
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "WhileStatement",
              "condition": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 120
                  },
                  "end": {
                    "line": 1,
                    "column": 121
                  }
                },
                "range": [
                  120,
                  121
                ],
                "isLocal": true
              },
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 114
                },
                "end": {
                  "line": 1,
                  "column": 128
                }
              },
              "range": [
                114,
                128
              ]
            },
            {
              "type": "RepeatStatement",
              "condition": {
                "type": "NumericLiteral",
                "value": 0,
                "raw": "0",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 142
                  },
                  "end": {
                    "line": 1,
                    "column": 143
                  }
                },
                "range": [
                  142,
                  143
                ]
              },
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 129
                },
                "end": {
                  "line": 1,
                  "column": 143
                }
              },
              "range": [
                129,
                143
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 111
            },
            "end": {
              "line": 1,
              "column": 147
            }
          },
          "range": [
            111,
            147
          ]
        },
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 152
              },
              "end": {
                "line": 1,
                "column": 153
              }
            },
            "range": [
              152,
              153
            ],
            "isLocal": true
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
            "loc": {
              "start": {
                "line": 1,
                "column": 156
              },
              "end": {
                "line": 1,
                "column": 157
              }
            },
            "range": [
              156,
              157
            ]
          },
          "end": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
            "loc": {
              "start": {
                "line": 1,
                "column": 159
              },
              "end": {
                "line": 1,
                "column": 160
              }
            },
            "range": [
              159,
              160
            ]
          },
          "step": null,
          "body": [],
          "loc": {
            "start": {
              "line": 1,
              "column": 148
            },
            "end": {
              "line": 1,
              "column": 167
            }
          },
          "range": [
            148,
            167
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 168
                },
                "end": {
                  "line": 1,
                  "column": 169
                }
              },
              "range": [
                168,
                169
              ],
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [],
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 172
                },
                "end": {
                  "line": 1,
                  "column": 186
                }
              },
              "range": [
                172,
                186
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 168
            },
            "end": {
              "line": 1,
              "column": 186
            }
          },
          "range": [
            168,
            186
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 186
        }
      },
      "range": [
        0,
        186
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "foo",
          "loc": {
            "start": {
              "line": 1,
              "column": 9
            },
            "end": {
              "line": 1,
              "column": 12
            }
          },
          "range": [
            9,
            12
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "loc": {
            "start": {
              "line": 1,
              "column": 92
            },
            "end": {
              "line": 1,
              "column": 93
            }
          },
          "range": [
            92,
            93
          ],
          "isLocal": false
        }
      ]
    }
    },
    {
      "source": "--comment\nif 1 then elseif 2 then else end",
      "options": {},
      "name": "should not track locations or ranges by default",
      "result":     {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 3
                  },
                  "end": {
                    "line": 2,
                    "column": 4
                  }
                },
                "range": [
                  13,
                  14
                ]
              },
              "body": [],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 0
                },
                "end": {
                  "line": 2,
                  "column": 9
                }
              },
              "range": [
                10,
                19
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 17
                  },
                  "end": {
                    "line": 2,
                    "column": 18
                  }
                },
                "range": [
                  27,
                  28
                ]
              },
              "body": [],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 10
                },
                "end": {
                  "line": 2,
                  "column": 23
                }
              },
              "range": [
                20,
                33
              ]
            },
            {
              "type": "ElseClause",
              "body": [],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 24
                },
                "end": {
                  "line": 2,
                  "column": 28
                }
              },
              "range": [
                34,
                38
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 32
            }
          },
          "range": [
            10,
            42
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 32
        }
      },
      "range": [
        10,
        42
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--comment",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "globals": []
    }
    },
    {
      "source": "foo = 1",
      "options": {"locations": true},
      "name": "should be able to track only locations",
      "result":     {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ],
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                6,
                7
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 7
            }
          },
          "range": [
            0,
            7
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "foo",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            0,
            3
          ],
          "isLocal": false
        }
      ]
    }
    },
    {
      "source": "foo = 2",
      "options": {"ranges": true},
      "name": "should be able to track only ranges",
      "result":     {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              },
              "range": [
                0,
                3
              ],
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                6,
                7
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 7
            }
          },
          "range": [
            0,
            7
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "foo",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            0,
            3
          ],
          "isLocal": false
        }
      ]
    }
    },
    {
      "source": "",
      "options": {},
      "name": "should produce empty tree on empty input",
      "result":     {
      "type": "Chunk",
      "body": [],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 0
        }
      },
      "range": [
        0,
        0
      ],
      "comments": [],
      "globals": []
    }
    },
    {
      "source": "--comment",
      "options": {"comments": false},
      "name": "should ignore comments if told to",
      "result":     {
      "type": "Chunk",
      "body": [],
      "loc": {
        "start": {
          "line": 1,
          "column": 9
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        9,
        9
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--comment",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            0,
            9
          ]
        }
      ],
      "globals": []
    }
    }
  ];
}));
