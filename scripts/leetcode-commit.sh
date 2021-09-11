#!/bin/bash
# Auto commit with message
set -eo pipefail
IFS=$'\n\t'

# Get $problem from `git status`
status=$(git status | grep LeetCode | grep md | head -n 1)
problem=$(echo $status | sed -r 's/.*LeetCode\/([a-z-]+)\/.*/\1/g')

number=$1
if [[ -z $number ]]; then
    echo -n "[Enter Problem Number]: "
    read -e -r number
fi

# Commit
git add -A
git commit -m "Add \`$number: ${problem}\` typescript soloution"
