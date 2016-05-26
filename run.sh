#!/usr/bin/env bash
set -e
set -x

export NODE_ENV="${NODE_ENV:-development}"
mkdir -p $ROOT/shared/logs/nginx

if [ $NODE_ENV != "production" ]; then
  nginx -g 'daemon on;' -c $ROOT/src/nginx.conf
  npm run dev
else
  echo "Write a production web server."
  exit 1
fi
