#!/bin/bash
# Validate TAP output from a test run.
#
# Fails if any test reports "not ok", and also fails if the output is not
# usable TAP at all. That second check matters: an engine that crashes before
# running a single test still exits 0 through a plain pipe, which previously
# let a broken Rhino job report success.
ret=0
plan=0
ok_count=0
started=0

# Some engines prefix every line with a log level, e.g. Rhino's shell emits
# "INFO ok 1 <name>". Strip a leading "INFO "/"DEBUG "/"WARN " so the TAP
# grammar can be matched, but keep printing the original line.
strip_prefix() {
	case "$1" in
		INFO\ *|DEBUG\ *|WARN\ *) printf '%s' "${1#* }" ;;
		*) printf '%s' "$1" ;;
	esac
}

while read -r line; do
	echo "$line"

	tap=$(strip_prefix "$line")

	if [[ $tap == 'not ok '* ]] ; then
		ret=1
		started=1
	elif [[ $tap == 'ok '* ]] ; then
		ok_count=$((ok_count + 1))
		started=1
	elif [[ $tap == '1..'* ]] ; then
		plan=$((plan + 1))
		started=1
	elif [[ $tap == 'Bail out!'* ]] ; then
		ret=1
		started=1
	fi
done

# No TAP plan and no results means the engine never got as far as testing.
if [ "$started" -eq 0 ]; then
	echo "tap_check: no TAP output produced - the test run did not start" >&2
	exit 1
fi

if [ "$ok_count" -eq 0 ] && [ "$ret" -eq 0 ]; then
	echo "tap_check: TAP produced no passing assertions" >&2
	exit 1
fi

# NOTE: a plan/result count comparison is deliberately absent. The runner
# declares one TAP test per spec case, while `--console` reports assertions,
# so the two numbers are not comparable.

exit "$ret"
