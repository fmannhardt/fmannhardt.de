#!/bin/bash
set -x

gatsby build

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/public ssh://blog.fmannhardt.de@fmannhardt.de:/home/domains/fmannhardt.de/public_html/b