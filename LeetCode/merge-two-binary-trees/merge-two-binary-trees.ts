import TreeNode from '../_helper/BinaryTree.ts'

function mergeTrees(
	root1: TreeNode | null,
	root2: TreeNode | null,
): TreeNode | null {
	if (!root1) return root2
	if (!root2) return root1

	const merged = new TreeNode(root1.val + root2.val)
	merged.left = mergeTrees(root1.left, root2.left)
	merged.right = mergeTrees(root1.right, root2.right)
	return merged
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test(
	'input: [1,3,2,5], [2,1,3,null,4,null,7] ~> expected: [3, 4, 5, 5, 4, null, 7]',
	() => {
		const tree1 = [1, 3, 2, 5]
		const tree2 = [2, 1, 3, null, 4, null, 7]
		const expected = [3, 4, 5, 5, 4, null, 7]

		asserts.assertEquals(
			mergeTrees(TreeNode.fromArray(tree1), TreeNode.fromArray(tree2)),
			TreeNode.fromArray(expected),
		)
	},
)
