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
      "result": "[1:8] no loop to continue near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "FiveM5.4"
      }
    },
    {
      "source": "do continue end",
      "result": "[1:12] no loop to continue near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "FiveM5.4"
      }
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
              "name": "i",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
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
            },
            "end": {
              "type": "NumericLiteral",
              "value": 10,
              "raw": "10",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                8,
                10
              ]
            },
            "step": null,
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 22
                  }
                },
                "range": [
                  14,
                  22
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
                "column": 26
              }
            },
            "range": [
              0,
              26
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
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
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
              "raw": "true",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                6,
                10
              ]
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 22
                  }
                },
                "range": [
                  14,
                  22
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
                "column": 26
              }
            },
            "range": [
              0,
              26
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
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "FiveM5.4"
      }
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
              "raw": "true",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 22
                },
                "end": {
                  "line": 1,
                  "column": 26
                }
              },
              "range": [
                22,
                26
              ]
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  7,
                  15
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
                "column": 26
              }
            },
            "range": [
              0,
              26
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
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "FiveM5.4"
      }
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
              "name": "i",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
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
            },
            "end": {
              "type": "NumericLiteral",
              "value": 10,
              "raw": "10",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                8,
                10
              ]
            },
            "step": null,
            "body": [
              {
                "type": "ForNumericStatement",
                "variable": {
                  "type": "Identifier",
                  "name": "j",
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
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 21
                    }
                  },
                  "range": [
                    20,
                    21
                  ]
                },
                "end": {
                  "type": "NumericLiteral",
                  "value": 10,
                  "raw": "10",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 22
                    },
                    "end": {
                      "line": 1,
                      "column": 24
                    }
                  },
                  "range": [
                    22,
                    24
                  ]
                },
                "step": null,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 28
                      },
                      "end": {
                        "line": 1,
                        "column": 36
                      }
                    },
                    "range": [
                      28,
                      36
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 40
                  }
                },
                "range": [
                  14,
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
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "FiveM5.4"
      }
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
                "name": "k",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "v",
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
                ],
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "pairs",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 11
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    11,
                    16
                  ],
                  "isLocal": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "t",
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
                    ],
                    "isLocal": false
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
                  19
                ]
              }
            ],
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 23
                  },
                  "end": {
                    "line": 1,
                    "column": 31
                  }
                },
                "range": [
                  23,
                  31
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
                "column": 35
              }
            },
            "range": [
              0,
              35
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
            "column": 35
          }
        },
        "range": [
          0,
          35
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "pairs",
            "loc": {
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              11,
              16
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "t",
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
        "luaVersion": "FiveM5.4"
      }
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
              "name": "i",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
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
            },
            "end": {
              "type": "NumericLiteral",
              "value": 10,
              "raw": "10",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                8,
                10
              ]
            },
            "step": null,
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 23
                  }
                },
                "range": [
                  14,
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
        "luaVersion": "FiveM5.4"
      }
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
              "name": "i",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                4,
                5
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
            },
            "end": {
              "type": "NumericLiteral",
              "value": 10,
              "raw": "10",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                8,
                10
              ]
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
                        "name": "i",
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
                        ],
                        "isLocal": true
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 20
                          },
                          "end": {
                            "line": 1,
                            "column": 21
                          }
                        },
                        "range": [
                          20,
                          21
                        ]
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
                    },
                    "body": [
                      {
                        "type": "ContinueStatement",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 27
                          },
                          "end": {
                            "line": 1,
                            "column": 35
                          }
                        },
                        "range": [
                          27,
                          35
                        ]
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 14
                      },
                      "end": {
                        "line": 1,
                        "column": 35
                      }
                    },
                    "range": [
                      14,
                      35
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 39
                  }
                },
                "range": [
                  14,
                  39
                ]
              },
              {
                "type": "CallStatement",
                "expression": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "print",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 40
                      },
                      "end": {
                        "line": 1,
                        "column": 45
                      }
                    },
                    "range": [
                      40,
                      45
                    ],
                    "isLocal": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "i",
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 46
                        },
                        "end": {
                          "line": 1,
                          "column": 47
                        }
                      },
                      "range": [
                        46,
                        47
                      ],
                      "isLocal": true
                    }
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 40
                    },
                    "end": {
                      "line": 1,
                      "column": 48
                    }
                  },
                  "range": [
                    40,
                    48
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 40
                  },
                  "end": {
                    "line": 1,
                    "column": 48
                  }
                },
                "range": [
                  40,
                  48
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
                "column": 52
              }
            },
            "range": [
              0,
              52
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
            "column": 52
          }
        },
        "range": [
          0,
          52
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "print",
            "loc": {
              "start": {
                "line": 1,
                "column": 40
              },
              "end": {
                "line": 1,
                "column": 45
              }
            },
            "range": [
              40,
              45
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
        "luaVersion": "FiveM5.4"
      }
    },
    {
      "source": "for a in b do continue end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
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
            ],
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 22
                  }
                },
                "range": [
                  14,
                  22
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
                "column": 26
              }
            },
            "range": [
              0,
              26
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
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
              "raw": "0",
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
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
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
        "luaVersion": "FiveM5.4"
      }
    },
    {
      "source": "repeat continue until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 22
                },
                "end": {
                  "line": 1,
                  "column": 23
                }
              },
              "range": [
                22,
                23
              ]
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  7,
                  15
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
        "luaVersion": "FiveM5.4"
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
                "name": "continue",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  6,
                  14
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
                "name": "continue",
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
            "name": "continue",
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
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
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
                  "name": "continue",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 10
                    }
                  },
                  "range": [
                    2,
                    10
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
                    "column": 10
                  }
                },
                "range": [
                  0,
                  10
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
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  13,
                  14
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
                "column": 14
              }
            },
            "range": [
              0,
              14
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
            "column": 14
          }
        },
        "range": [
          0,
          14
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
              "raw": "0",
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
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
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
              "raw": "0",
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
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
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
              "raw": "0",
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
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
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
              "raw": "0",
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
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
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
        "luaVersion": "LuaJIT"
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
              "raw": "0",
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
            },
            "body": [
              {
                "type": "ContinueStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  11,
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
                "name": "continue",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  6,
                  14
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
        "luaVersion": "5.4",
        "continueKeyword": false
      }
    }
  ];
}));
