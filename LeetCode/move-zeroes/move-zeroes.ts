/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let left = 0
	let right = 0
	const length = nums.length
	while (right < length) {
		if (nums[right] !== 0) {
			swap(nums, left, right)
			left++
		}
		right++
	}
}

function swap(nums: number[], left: number, right: number) {
	const tmp = nums[left]
	nums[left] = nums[right]
	nums[right] = tmp
}

// 0, 1, 0, 3, 12
// 1, 0, 0, 3, 12
// 1, 3, 0, 0, 12
// 1, 3, 12, 0, 0

// test cases
import {asserts} from '../../deps.ts'
Deno.test('input: [0,1,0,3,12], expected: [1,3,12,0,0] ', () => {
	const nums = [0, 1, 0, 3, 12]
	moveZeroes(nums)
	asserts.assertEquals(nums, [1, 3, 12, 0, 0])
})
