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
}(this, 'lua55', function (exports) {
  'use strict';

  exports.name = 'lua55';
  exports.spec = [
    {
      "source": "global = 1",
      "result": "[1:7] <name> expected near '='",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global",
      "result": "[1:6] <name> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "local global = 1",
      "result": "[1:6] <name> expected near 'global'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "t.global = 1",
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
                  "name": "global",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    2,
                    8
                  ]
                },
                "base": {
                  "type": "Identifier",
                  "name": "t",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  0,
                  8
                ]
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
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
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
                "column": 12
              }
            },
            "range": [
              0,
              12
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
            "column": 12
          }
        },
        "range": [
          0,
          12
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "t",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ]
                },
                "attribute": null,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ]
              }
            ],
            "init": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              0,
              8
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
            "column": 8
          }
        },
        "range": [
          0,
          8
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ]
                },
                "attribute": null,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ]
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
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
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
                "column": 12
              }
            },
            "range": [
              0,
              12
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
            "column": 12
          }
        },
        "range": [
          0,
          12
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x, y = 1, 2",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ]
                },
                "attribute": null,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ]
              },
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "y",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 11
                    }
                  },
                  "range": [
                    10,
                    11
                  ]
                },
                "attribute": null,
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
                  11
                ]
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
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  14,
                  15
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 17
                  },
                  "end": {
                    "line": 1,
                    "column": 18
                  }
                },
                "range": [
                  17,
                  18
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
                "column": 18
              }
            },
            "range": [
              0,
              18
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
            "column": 18
          }
        },
        "range": [
          0,
          18
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> x = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
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
                    "column": 19
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  19,
                  20
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
                "column": 20
              }
            },
            "range": [
              0,
              20
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
            "column": 20
          }
        },
        "range": [
          0,
          20
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x <const> = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
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
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  7,
                  16
                ]
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
                    "column": 19
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  19,
                  20
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
                "column": 20
              }
            },
            "range": [
              0,
              20
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
            "column": 20
          }
        },
        "range": [
          0,
          20
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> x, <close> y",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              },
              {
                "type": "GlobalIdentifier",
                "name": {
                  "type": "Identifier",
                  "name": "y",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 26
                    },
                    "end": {
                      "line": 1,
                      "column": 27
                    }
                  },
                  "range": [
                    26,
                    27
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "close",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 18
                    },
                    "end": {
                      "line": 1,
                      "column": 25
                    }
                  },
                  "range": [
                    18,
                    25
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 27
                  }
                },
                "range": [
                  18,
                  27
                ]
              }
            ],
            "init": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 27
              }
            },
            "range": [
              0,
              27
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
            "column": 27
          }
        },
        "range": [
          0,
          27
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global *",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalWildcardStatement",
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              0,
              8
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
            "column": 8
          }
        },
        "range": [
          0,
          8
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> *",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalWildcardStatement",
            "attribute": {
              "type": "Attribute",
              "name": "const",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                7,
                14
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              0,
              16
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
            "column": 16
          }
        },
        "range": [
          0,
          16
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function f() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 17
                }
              },
              "range": [
                16,
                17
              ],
              "isLocal": true
            },
            "isLocal": false,
            "parameters": [],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 23
              }
            },
            "range": [
              0,
              23
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
            "column": 23
          }
        },
        "range": [
          0,
          23
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function a.b.c() end",
      "result": "[1:17] '(' expected near '.'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "local <const> x = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 15
                    }
                  },
                  "range": [
                    14,
                    15
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 13
                    }
                  },
                  "range": [
                    6,
                    13
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  6,
                  15
                ],
                "isLocal": true
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
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  18,
                  19
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
                "column": 19
              }
            },
            "range": [
              0,
              19
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
            "column": 19
          }
        },
        "range": [
          0,
          19
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "local <const> x, <close> y = 1, 2",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "x",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 15
                    }
                  },
                  "range": [
                    14,
                    15
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 13
                    }
                  },
                  "range": [
                    6,
                    13
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  6,
                  15
                ],
                "isLocal": true
              },
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "y",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 25
                    },
                    "end": {
                      "line": 1,
                      "column": 26
                    }
                  },
                  "range": [
                    25,
                    26
                  ]
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "close",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 17
                    },
                    "end": {
                      "line": 1,
                      "column": 24
                    }
                  },
                  "range": [
                    17,
                    24
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 17
                  },
                  "end": {
                    "line": 1,
                    "column": 26
                  }
                },
                "range": [
                  17,
                  26
                ],
                "isLocal": true
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
                    "column": 29
                  },
                  "end": {
                    "line": 1,
                    "column": 30
                  }
                },
                "range": [
                  29,
                  30
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 32
                  },
                  "end": {
                    "line": 1,
                    "column": 33
                  }
                },
                "range": [
                  32,
                  33
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
                "column": 33
              }
            },
            "range": [
              0,
              33
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
            "column": 33
          }
        },
        "range": [
          0,
          33
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(...) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  11,
                  14
                ]
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              0,
              19
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
            "column": 19
          }
        },
        "range": [
          0,
          19
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "f",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(...args) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  11,
                  14
                ]
              },
              {
                "type": "VarargWithName",
                "name": {
                  "type": "Identifier",
                  "name": "args",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 18
                    }
                  },
                  "range": [
                    14,
                    18
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 18
                  }
                },
                "range": [
                  14,
                  18
                ]
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 23
              }
            },
            "range": [
              0,
              23
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
            "column": 23
          }
        },
        "range": [
          0,
          23
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "f",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(a, ...rest) return rest end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
                ],
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 17
                  }
                },
                "range": [
                  14,
                  17
                ]
              },
              {
                "type": "VarargWithName",
                "name": {
                  "type": "Identifier",
                  "name": "rest",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 17
                    },
                    "end": {
                      "line": 1,
                      "column": 21
                    }
                  },
                  "range": [
                    17,
                    21
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 17
                  },
                  "end": {
                    "line": 1,
                    "column": 21
                  }
                },
                "range": [
                  17,
                  21
                ]
              }
            ],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "rest",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 30
                      },
                      "end": {
                        "line": 1,
                        "column": 34
                      }
                    },
                    "range": [
                      30,
                      34
                    ],
                    "isLocal": true
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 23
                  },
                  "end": {
                    "line": 1,
                    "column": 34
                  }
                },
                "range": [
                  23,
                  34
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
                "column": 38
              }
            },
            "range": [
              0,
              38
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
            "column": 38
          }
        },
        "range": [
          0,
          38
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "f",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(a, b, ...args) return args end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
                ],
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  14,
                  15
                ],
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
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
              {
                "type": "VarargWithName",
                "name": {
                  "type": "Identifier",
                  "name": "args",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 24
                    }
                  },
                  "range": [
                    20,
                    24
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 20
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  20,
                  24
                ]
              }
            ],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "args",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 33
                      },
                      "end": {
                        "line": 1,
                        "column": 37
                      }
                    },
                    "range": [
                      33,
                      37
                    ],
                    "isLocal": true
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 26
                  },
                  "end": {
                    "line": 1,
                    "column": 37
                  }
                },
                "range": [
                  26,
                  37
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
                "column": 41
              }
            },
            "range": [
              0,
              41
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
            "column": 41
          }
        },
        "range": [
          0,
          41
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "f",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "local function f(...args) return args end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 15
                },
                "end": {
                  "line": 1,
                  "column": 16
                }
              },
              "range": [
                15,
                16
              ],
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
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
              {
                "type": "VarargWithName",
                "name": {
                  "type": "Identifier",
                  "name": "args",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 24
                    }
                  },
                  "range": [
                    20,
                    24
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 20
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  20,
                  24
                ]
              }
            ],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "args",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 33
                      },
                      "end": {
                        "line": 1,
                        "column": 37
                      }
                    },
                    "range": [
                      33,
                      37
                    ],
                    "isLocal": true
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 26
                  },
                  "end": {
                    "line": 1,
                    "column": 37
                  }
                },
                "range": [
                  26,
                  37
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
                "column": 41
              }
            },
            "range": [
              0,
              41
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
            "column": 41
          }
        },
        "range": [
          0,
          41
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "global",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  0,
                  6
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
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  9,
                  10
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
                "column": 10
              }
            },
            "range": [
              0,
              10
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
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "global",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              0,
              6
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.4"
      }
    },
    {
      "source": "global x = 1",
      "result": "[1:7] '=' expected near 'x'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.4"
      }
    },
    {
      "source": "global *",
      "result": "[1:7] '=' expected near '*'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.4"
      }
    },
    {
      "source": "local <const> x = 1",
      "result": "[1:6] <name> expected near '<'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.4"
      }
    },
    {
      "source": "function f(...args) end",
      "result": "[1:14] ')' expected near 'args'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.4"
      }
    },
    {
      "source": "global = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "global",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  0,
                  6
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
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  9,
                  10
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
                "column": 10
              }
            },
            "range": [
              0,
              10
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
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "global",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              0,
              6
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5",
        "globalKeyword": false
      }
    },
    {
      "source": "global = 1",
      "result": "[1:0] unexpected keyword 'global' near '='",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.4",
        "globalKeyword": true
      }
    }
  ];
}));
