#!/bin/bash

/usr/bin/code-server --bind-addr 0.0.0.0:8080 .

tail -f /dev/null &
PID=$!
# Now blocking ...

wait ${PID}

# Here a TERM/INT signal must be received
trap - TERM INT