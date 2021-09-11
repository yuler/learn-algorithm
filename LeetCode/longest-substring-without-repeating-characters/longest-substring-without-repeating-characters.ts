function lengthOfLongestSubstring(s: string): number {
	const set = new Set()
	let right = -1
	let count = 0

	for (let index = 0; index < s.length; index++) {
		if (index !== 0) {
			set.delete(s.charAt(index - 1))
		}
		while (right + 1 < s.length && !set.has(s.charAt(right + 1))) {
			set.add(s.charAt(right + 1))
			++right
		}
		count = Math.max(count, right - index + 1)
	}

	return count
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('input: abcabcbb ~> expected: 3', () => {
	const input = 'abcabcbb'
	const expected = 3
	asserts.assertEquals(lengthOfLongestSubstring(input), expected)
})

Deno.test('input: bbbbb ~> expected: 1', () => {
	const input = 'bbbbb'
	const expected = 1
	asserts.assertEquals(lengthOfLongestSubstring(input), expected)
})

Deno.test('input: pwwkew ~> expected: 3', () => {
	const input = 'pwwkew'
	const expected = 3
	asserts.assertEquals(lengthOfLongestSubstring(input), expected)
})

Deno.test('input: "" ~> expected: 0', () => {
	const input = ''
	const expected = 0
	asserts.assertEquals(lengthOfLongestSubstring(input), expected)
})
