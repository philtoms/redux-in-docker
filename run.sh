#!/usr/bin/env bash
set -e
set -x

export NODE_ENV="${NODE_ENV:-development}"

if [ $NODE_ENV != "production" ]; then
  npm run dev
else
  echo "Write a production web server first!"
  exit 1
fi
