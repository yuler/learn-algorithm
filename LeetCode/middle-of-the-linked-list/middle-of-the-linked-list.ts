//  Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function middleNode(head: ListNode | null): ListNode | null {
	let fast = head
	let slow = head
	while (fast?.next) {
		fast = fast.next!.next
		slow = slow!.next
	}

	return slow
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('input: [1,2,3,4,5], expected: [3,4,5]', () => {
	const input = generateListNodeFromArray([1, 2, 3, 4, 5])
	const expected = generateListNodeFromArray([3, 4, 5])

	asserts.assertEquals(middleNode(input), expected)
})

Deno.test('input: [1,2,3,4,5,6], expected: [4,5,6]', () => {
	const input = generateListNodeFromArray([1, 2, 3, 4, 5, 6])
	const expected = generateListNodeFromArray([4, 5, 6])

	asserts.assertEquals(middleNode(input), expected)
})

// helper
function generateListNodeFromArray(array: number[]): ListNode | null {
	let dummy = new ListNode()
	const head = dummy
	for (let index = 0; index < array.length; index++) {
		const item = array[index]
		dummy.next = new ListNode(item)
		dummy = dummy.next
	}
	return head.next
}
