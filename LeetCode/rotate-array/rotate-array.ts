const reverse = (nums: number[], start: number, end: number) => {
	while (start < end) {
		const temp = nums[start]
		nums[start] = nums[end]
		nums[end] = temp
		start += 1
		end -= 1
	}
}

function rotate(nums: number[], k: number): void {
	const length = nums.length
	k = k % length
	reverse(nums, 0, nums.length - 1)
	reverse(nums, 0, k - 1)
	reverse(nums, k, nums.length - 1)
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('nums = [1,2,3,4,5,6,7], k = 3 ~> [5,6,7,1,2,3,4]', () => {
	const nums = [1, 2, 3, 4, 5, 6, 7]
	rotate(nums, 3), asserts.assertEquals([5, 6, 7, 1, 2, 3, 4], nums)
})

Deno.test('nums = [-1,-100,3,99], k = 2 ~> [3,99,-1,-100]', () => {
	const nums = [-1, -100, 3, 99]
	rotate(nums, 2)
	asserts.assertEquals([3, 99, -1, -100], nums)
})
