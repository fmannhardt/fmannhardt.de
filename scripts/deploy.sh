#!/bin/bash
set -x

gatsby build --prefix-paths

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/public/ blog.fmannhardt.de@fmannhardt.de:~/