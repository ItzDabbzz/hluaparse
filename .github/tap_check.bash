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
saw_summary=0

# Some engines prefix every line with a log level, e.g. Rhino's shell emits
# "INFO ok 1 <name>". Strip a leading "INFO "/"DEBUG "/"WARN " so the TAP
# grammar can be matched, but keep printing the original line.
strip_prefix() {
	# Drop the trailing CR first. Engines that emit CRLF (Java on Linux does)
	# otherwise leave "# fail 0\r", which never compares equal to "0" and made
	# a complete 3150-test Rhino run look like no output at all.
	line="${1%$'\r'}"
	case "$line" in
		INFO\ *|DEBUG\ *|WARN\ *) printf '%s' "${line#* }" ;;
		*) printf '%s' "$line" ;;
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
	elif [[ $tap == '# fail '* ]] ; then
		# The spec reporter prints its "# fail" summary only once the whole
		# suite has run. Its presence is what distinguishes a complete run
		# from one whose engine was killed partway: a truncated run emits a
		# valid "ok" for everything it managed and then just stops.
		saw_summary=1
		if [ "${tap#\# fail }" != "0" ]; then
			ret=1
		fi
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

# No summary means the engine never finished the suite. This catches a real
# failure mode: an engine that is killed partway through still reports every
# test it managed as a passing "ok" and exits 0, so counting results alone
# cannot tell it apart from a full run.
if [ "$saw_summary" -eq 0 ]; then
	echo "tap_check: run produced no completion summary - the suite did not finish" >&2
	exit 1
fi

exit "$ret"
