# Examples

Two working pages, both loading the UMD build straight from this repository.
No build step, no bundler, no framework &mdash; open the file and they run.
They are self-contained: no CDN, no third-party JavaScript, no network access
at all.

## [AST tree viewer](../examples/treeview.html)

A live source-to-tree view. Type Lua into the left pane and the parser runs on
every keystroke, with a 200&nbsp;ms debounce so a burst of typing parses once
rather than once per key. The right pane is the resulting abstract syntax
tree, rendered from the plain JSON that `hluaparse.parse` returns &mdash; node
types in green, field values in orange, collapsible at every level.

The `luaVersion` selector switches between `5.1`, `5.2`, `5.3`, `5.4`, `5.5`,
`FiveM5.4` and `LuaJIT`, which is the quickest way to see the dialect
differences the README describes as a table. Ticking `locations` or `ranges`
re-parses with those node fields attached, so you can watch the tree grow.
Syntax errors render in place with the parser's own line and column.

## [Code statistics](../examples/stats.html)

Point it at any `.lua` file and it reports what the parser made of it: a
frequency table of AST node types and a frequency table of operators, each
sorted most-common-first and scaled so the top row reads as a ranking.

The traversal is not bespoke. It calls `walker()` from
[`examples/js/walker.js`](../examples/js/walker.js) &mdash; the same small
AST visitor the test suite uses &mdash; so this page is a working
demonstration of that file rather than a second implementation of it.

Worth trying on a large file: `benchmarks/lib/ParseLua.lua` is LuaMinify's
parser, about 1,250 lines, and makes a good stress test.

## Note on what changed

Both pages previously existed but were dead. The tree viewer pulled YUI 2.9's
TreeView widget and the Ace editor from CDNs that no longer serve those
projects, and the statistics page loaded jQuery 1.8.3 and fetched its Lua
source over `$.get`. Both are now self-contained and load only
`luaparse.js` &mdash; the tree viewer, and the stats page together with
`walker.js`.
