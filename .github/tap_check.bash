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

while read -r line; do
	echo "$line"

	if [[ $line == 'not ok '* ]] ; then
		ret=1
	elif [[ $line == 'ok '* ]] ; then
		ok_count=$((ok_count + 1))
		started=1
	elif [[ $line == '1..'* ]] ; then
		plan=$((plan + 1))
		started=1
	elif [[ $line == 'Bail out!'* ]] ; then
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
