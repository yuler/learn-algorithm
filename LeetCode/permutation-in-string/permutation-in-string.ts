function checkInclusion(s1: string, s2: string): boolean {
	const l1 = s1.length
	const l2 = s2.length

	if (l1 > l2) {
		return false
	}

	const arr = new Array(26).fill(0)
	for (let index = 0; index < l1; index++) {
		arr[s1[index].charCodeAt(0) - 'a'.charCodeAt(0)]--
	}

	let left = 0
	for (let right = 0; right < l2; right++) {
		const idx = s2[right].charCodeAt(0) - 'a'.charCodeAt(0)
		arr[idx]++

		while (arr[idx] > 0) {
			arr[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]--
			left++
		}

		if (right - left + 1 === l1) {
			return true
		}
	}

	return false
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('input: s1 = "ab" s2 = "eidbaooo" ~> expected: true', () => {
	const s1 = 'ab'
	const s2 = 'eidbaooo'
	const expected = true
	asserts.assertEquals(checkInclusion(s1, s2), expected)
})

Deno.test('input: s1= "ab" s2 = "eidboaoo" ~> expected: false', () => {
	const s1 = 'ab'
	const s2 = 'eidboaoo'
	const expected = false
	asserts.assertEquals(checkInclusion(s1, s2), expected)
})
