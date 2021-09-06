function searchInsert(nums: number[], target: number): number {
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] === target) {
			return mid
		} else if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return left
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('nums = [1, 3, 5, 6], target = 5, output = 2', () => {
	asserts.assertEquals(searchInsert([1, 2, 5, 6], 5), 2)
})

Deno.test('nums = [1, 3, 5, 6], target = 2, output = 1', () => {
	asserts.assertEquals(searchInsert([1, 3, 5, 6], 2), 1)
})

Deno.test('nums = [1, 3, 5, 6], target = 7, output = 4', () => {
	asserts.assertEquals(searchInsert([1, 3, 5, 6], 7), 4)
})

Deno.test('nums = [1, 3, 5, 6], target = 0, output = 0', () => {
	asserts.assertEquals(searchInsert([1, 3, 5, 6], 0), 0)
})

Deno.test('nums = [1], target = 0, output = 0', () => {
	asserts.assertEquals(searchInsert([1], 0), 0)
})
