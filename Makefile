DOCS := docs/*.md
PROCESSOR ?= "/opt/v8/tools/linux-tick-processor"
LIB := ./node_modules
BIN := $(LIB)/.bin

all: build

# Main tasks
# ----------

build:
	$(BIN)/gulp build

lint:
	$(BIN)/gulp lint

.PHONY: build lint all

# Install and internal updates
# ----------------------------

install:
	npm install

# This is required if mocha, expect or benchmark is updated.
update:
	cp -v $(LIB)/spec/lib/* test/lib/
	cp -v $(LIB)/benchmark/benchmark.js test/lib/

version-bump:
	$(BIN)/gulp version-bump
	git add luaparse.js

.PHONY: install update version-bump

# Tests
# -----

test-node:
	node test/runner.js --console

test:
	$(BIN)/testem ci

testem-engines:
	$(BIN)/testem -l node,ringo,rhino,rhino1.7R5

# Scaffold all test files in the scaffolding dir.
scaffold-tests:
	$(foreach file,\
		$(notdir $(wildcard test/scaffolding/*)),\
		$(MAKE) scaffold-test FILE=$(file);\
	)

scaffold-test:
	./scripts/scaffold-test --name=$(FILE) \
		test/scaffolding/$(FILE) \
		> test/spec/$(FILE).js

.PHONY: test-node test testem-engines scaffold-tests scaffold-test

# Documentation
# -------------

docs: coverage docs-test docs-md

# The version badge is read from package.json rather than written out by hand:
# a literal here drifted once already and shipped a number no release had.
VERSION := $(shell node -p "require('./package.json').version")

docs-index:
	$(BIN)/marked README.md --gfm \
		| sed 's|<!--VERSION-->|v$(VERSION)|' docs/layout/head.html - docs/layout/foot.html \
		> docs/index.html

docs-md: docs-index $(patsubst %.md,%.html, $(wildcard docs/*.md))

%.html: %.md
	echo $<
	$(BIN)/marked $< --gfm \
		| sed 's|<!--VERSION-->|v$(VERSION)|' docs/layout/head.html - docs/layout/foot.html \
		> $@

.PHONY: docs docs-test docs-index

# Coverage
# --------

coverage:
	rm -rf html-report docs/coverage
	$(BIN)/nyc --reporter=html --report-dir=docs/coverage node test/runner.js --console >/dev/null

.PHONY: coverage

# Benchmark
# ---------

benchmark:
	./scripts/benchmark -v benchmarks/lib/ParseLua.lua

profile:
	bash benchmarks/run.sh -v --processor $(PROCESSOR) --profile HEAD

benchmark-previous:
	bash benchmarks/run.sh --js HEAD HEAD~1

.PHONY: benchmark profile benchmark-previous

# Quality Assurance
# -----------------

complexity-analysis:
	@echo "===================== Complexity analysis ============================"
	./scripts/complexity 10
	$(BIN)/cr -lws --maxcc 22 luaparse.js

coverage-analysis: coverage
	$(BIN)/nyc check-coverage --statements 100 --branches 100 --functions 100

qa:
	$(MAKE) test lint complexity-analysis coverage-analysis

# The ES5-only engines in CI cannot parse the ES6 source, so they are run
# against this generated downlevelled build instead.
build-es5:
	node scripts/build-es5

clean:
	rm -f docs/*.html
	rm -rf lib-cov coverage html-report docs/coverage/ dist/

.PHONY: complexity-analysis coverage-analysis qa clean build-es5
