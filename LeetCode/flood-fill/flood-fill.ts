function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	newColor: number,
): number[][] {
	const row = image.length
	const col = image[0].length
	const color = image[sr][sc]
	if (color === newColor) return image

	dfs(sr, sc)

	return image

	function dfs(r: number, c: number) {
		if (image[r][c] === color) {
			image[r][c] = newColor
			if (r >= 1) dfs(r - 1, c)
			if (r + 1 < row) dfs(r + 1, c)
			if (c >= 1) dfs(r, c - 1)
			if (c + 1 < col) dfs(r, c + 1)
		}
	}
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test(
	'input: image = [[1,1,1],[1,1,0],[1,0,1]] sr = 1, sc = 1, newColor = 2 ~> expected: [[2,2,2],[2,2,0],[2,0,1]]',
	() => {
		const image = [
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1],
		]
		const sr = 1
		const sc = 1
		const newColor = 2
		const expected = [
			[2, 2, 2],
			[2, 2, 0],
			[2, 0, 1],
		]
		asserts.assertEquals(floodFill(image, sr, sc, newColor), expected)
	},
)
