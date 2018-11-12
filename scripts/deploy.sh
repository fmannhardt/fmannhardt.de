#!/bin/bash
set -x

gatsby build --prefix-paths

rsync -r --delete-after --quiet --exclude=/.ssh $TRAVIS_BUILD_DIR/public/ blog.fmannhardt.de@fmannhardt.de:~/ 