#!/usr/bin/env bash

pid=0

term_handler() {
  if [ $pid -ne 0 ]; then
    kill -SIGTERM "$pid"
    wait "$pid"
  fi
  exit 143;
}

trap 'kill ${!}; term_handler' SIGTERM

if [ "$DEBUG" = "true" ]; then
    echo "DEBUG mode";
    node --inspect=0.0.0.0:5858 app &
    pid="$!"
else
    node app &
    pid="$!"
fi

while true
do
  tail -f /dev/null & wait ${!}
done