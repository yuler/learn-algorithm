/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
	let left = 0
	let right = s.length - 1

	while (left < right) {
		swap(s, left, right)
		left++
		right--
	}
}

function swap(strings: string[], left: number, right: number) {
	const tmp = strings[left]
	strings[left] = strings[right]
	strings[right] = tmp
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test(
	'input: ["h","e","l","l","o"], expected: ["o","l","l","e","h"]',
	() => {
		const strings = ['h', 'e', 'l', 'l', 'o']
		reverseString(strings)
		asserts.assertEquals(strings, ['o', 'l', 'l', 'e', 'h'])
	},
)

Deno.test(
	'input: ["H","a","n","n","a","h"], expected: ["h","a","n","n","a","H"]',
	() => {
		const strings = ['H', 'a', 'n', 'n', 'a', 'h']
		reverseString(strings)
		asserts.assertEquals(strings, ['h', 'a', 'n', 'n', 'a', 'H'])
	},
)
