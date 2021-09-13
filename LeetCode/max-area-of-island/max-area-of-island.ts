function maxAreaOfIsland(grid: number[][]): number {
	const row = grid.length
	const col = grid[0].length
	let max = 0

	for (let r = 0; r < row; r++) {
		for (let c = 0; c < col; c++) {
			max = Math.max(max, dfs(grid, r, c))
		}
	}

	return max

	function dfs(grid: number[][], r: number, c: number): number {
		if (
			r < 0 ||
			c < 0 ||
			r === grid.length ||
			c === grid[0].length ||
			grid[r][c] === 0
		) {
			return 0
		}

		grid[r][c] = 0

		const dx = [0, 0, 1, -1]
		const dy = [1, -1, 0, 0]
		let ans = 1
		for (let i = 0; i < 4; i++) {
			const _r = r + dx[i]
			const _c = c + dy[i]
			ans += dfs(grid, _r, _c)
		}
		return ans
	}
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('test case 1', () => {
	const input = [
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	]
	const expected = 6
	asserts.assertEquals(maxAreaOfIsland(input), expected)
})

Deno.test('test case 2', () => {
	const input = [[0, 0, 0, 0, 0, 0, 0, 0]]
	const expected = 0
	asserts.assertEquals(maxAreaOfIsland(input), expected)
})
