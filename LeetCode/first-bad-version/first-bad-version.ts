/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: (n: number) => boolean) {
	return function (n: number): number {
		let left = 1
		let right = n
		while (left < right) {
			const mid = Math.floor(left + (right - left) / 2)
			if (isBadVersion(mid)) {
				right = mid
			} else {
				left = mid + 1
			}
		}
		return left
	}
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('n = 5, bad = 4, output = 4', () => {
	const isBadVersion = (n: number) => n >= 4
	asserts.assertEquals(solution(isBadVersion)(5), 4)
})

Deno.test('n = 1, bad = 1, output = 4', () => {
	const isBadVersion = (n: number) => n >= 1
	asserts.assertEquals(solution(isBadVersion)(1), 1)
})
