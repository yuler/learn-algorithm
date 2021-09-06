# Run deno test

if [[ -n $1 ]]; then
    problem=$1
else
    status=$(git status | grep LeetCode | head -n 1)
    # Get $problem from `git status`
    problem=$(echo $status | sed -r 's/.*LeetCode\/([a-z-]+)\/.*/\1/g')
fi

deno test LeetCode/$problem/$problem.ts
