# Coverage

`hluaparse` is held to a **100% statement, branch, function and line**
coverage gate. Not 99% &mdash; `nyc check-coverage` fails the build below it.

| Metric | Covered | Total | Percentage |
| --- | ---: | ---: | ---: |
| Statements | 1422 | 1422 | 100% |
| Branches | 1033 | 1033 | 100% |
| Functions | 163 | 163 | 100% |
| Lines | 1252 | 1252 | 100% |

The suite behind those numbers is **3,197 assertions**, run against 15 engine
configurations &mdash; Node 20/22/24, Bun 1.3.13 and latest, Duktape
2.4&ndash;2.7, four QuickJS builds, Rhino 1.9.1 and RingoJS 4.0.0.

Exact counts move as the parser grows, so treat the percentages as the
contract and the totals as a snapshot. The embedded report at the bottom of
this page is the authoritative, always-current version.

## How it is generated

The report is produced by [nyc](https://github.com/istanbuljs/nyc) as part of
`make docs`, which writes it to `docs/coverage/`:

```bash
./node_modules/.bin/nyc --reporter=html --report-dir=docs/coverage \
  node test/runner.js --console
```

The published report is regenerated on every push to `master` by the
**Update documentation** job, so what you see below is never stale relative to
the source it measures.

## luaparse.js, line by line

<iframe class="report-frame" src="coverage/luaparse.js.html" title="nyc coverage report for luaparse.js" loading="lazy"></iframe>

Prefer the report in its own window? Open
[coverage/index.html](coverage/index.html) directly.
