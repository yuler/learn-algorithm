# Auto commit with message

# Get $problem from `git status`
status=$(git status | grep LeetCode | head -n 1)
problem=$(echo $status | sed -r 's/.*LeetCode\/([a-z-]+)\/.*/\1/g')

# Commit
git add -A
git commit -m "Add \`$1: ${problem}\` typescript soloution"
