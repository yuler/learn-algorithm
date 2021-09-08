function sortedSquares(nums: number[]): number[] {
	let left = 0
	let right = nums.length - 1

	let index = right
	const result = new Array(nums.length)

	while (left <= right) {
		if (nums[left] ** 2 > nums[right] ** 2) {
			result[index] = nums[left] ** 2
			left++
		} else {
			result[index] = nums[right] ** 2
			right--
		}
		index--
	}

	return result
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('nums = [-4,-1,0,3,10] ~> [0,1,9,16,100]', () => {
	asserts.assertEquals([0, 1, 9, 16, 100], sortedSquares([-4, -1, 0, 3, 10]))
})

Deno.test('nums = [-7,-3,2,3,11] ~> [4,9,9,49,121]', () => {
	asserts.assertEquals([4, 9, 9, 49, 121], sortedSquares([-7, -3, 2, 3, 11]))
})
