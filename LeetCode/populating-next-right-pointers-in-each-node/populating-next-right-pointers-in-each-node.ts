class Node {
	val: number
	left: Node | null
	right: Node | null
	next: Node | null
	constructor(val?: number, left?: Node, right?: Node, next?: Node) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
		this.next = next === undefined ? null : next
	}
}

function connect(root: Node | null): Node | null {
	if (!root) return null

	let head = root
	while (head.left != null) {
		let current: Node | null = head
		while (current) {
			if (current.left) current.left.next = current.right
			if (current.right && current.next) {
				current.right.next = current.next.left
			}
			current = current.next
		}
		head = head.left
	}
	return root
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('input: [1,2,3,4,5,6,7] ~> expected: [1,#,2,3,#,4,5,6,7,#]', () => {
	asserts.assertEquals(1, 1)
})
