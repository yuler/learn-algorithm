export default class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val ?? 0
		this.left = left ?? null
		this.right = right ?? null
	}

	static fromArray = generateTreeNodeFromArray
}

function generateTreeNodeFromArray(array: (number | null)[]): TreeNode | null {
	if (array.length === 0) {
		return null
	}

	const root: TreeNode = new TreeNode(array[0]!)
	const trees: TreeNode[] = [root]

	let index = 1
	while (index < array.length) {
		const tree = trees.shift()
		// left
		const left = new TreeNode(array[index]!)
		tree!.left = left
		trees.push(left)
		index++
		// right
		if (index < array.length) {
			const right = new TreeNode(array[index]!)
			tree!.right = right
			trees.push(right)
			index++
		}
	}

	return root
}
