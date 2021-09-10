function twoSum(numbers: number[], target: number): number[] {
	let left = 0
	let right = numbers.length - 1
	while (left < right) {
		const sum = numbers[left] + numbers[right]
		if (sum === target) {
			return [left + 1, right + 1]
		} else if (sum < target) {
			left++
		} else {
			right--
		}
	}

	return []
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('numbers = [2,7,11,15], target = 9, expected: [1,2]', () => {
	asserts.assertEquals([1, 2], twoSum([2, 7, 11, 15], 9))
})

Deno.test('numbers = [2,3,4], target = 6, expected: [1,3]', () => {
	asserts.assertEquals([1, 3], twoSum([2, 3, 4], 6))
})

Deno.test('numbers = [-1,0], target = -1, expected: [1,2]', () => {
	asserts.assertEquals([1, 2], twoSum([-1, 0], -1))
})

Deno.test('numbers = [1,2,3,4,4,9,56,90], target = 8, expected: [4,5]', () => {
	asserts.assertEquals([4, 5], twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8))
})
