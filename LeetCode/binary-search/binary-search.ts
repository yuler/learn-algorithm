function search(nums: number[], target: number): number {
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2)
		if (target > nums[mid]) {
			left = mid + 1
		} else if (target < nums[mid]) {
			right = mid - 1
		} else {
			return mid
		}
	}

	return -1
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('test case 1', () => {
	{
		const nums = [-1, 0, 3, 5, 9, 12],
			target = 9,
			expect = 4
		asserts.assertEquals(search(nums, target), expect)
	}
})

Deno.test('test case 2', () => {
	{
		const nums = [-1, 0, 3, 5, 9, 12],
			target = 2,
			expect = -1
		asserts.assertEquals(search(nums, target), expect)
	}
})
