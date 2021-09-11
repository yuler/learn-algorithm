import ListNode from '../_helper/ListNode.ts'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const dummy = new ListNode(0, head)
	let fast = head
	let slow: ListNode | null = dummy
	for (let index = 0; index < n; index++) {
		fast = fast!.next
	}
	while (fast) {
		fast = fast.next
		slow = slow!.next
	}
	slow!.next = slow!.next!.next
	return dummy.next
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('head = [1,2,3,4,5], n = 2 ~> expected: [1,2,3,5]', () => {
	const head = ListNode.fromArray([1, 2, 3, 4, 5])
	const n = 2
	const expected = ListNode.fromArray([1, 2, 3, 5])
	asserts.assertEquals(removeNthFromEnd(head, n), expected)
})

Deno.test('head = [1], n = 1 ~> expected: []', () => {
	const head = ListNode.fromArray([1])
	const n = 1
	const expected = ListNode.fromArray([])
	asserts.assertEquals(removeNthFromEnd(head, n), expected)
})

Deno.test('head = [1,2], n = 1 ~> expected: [1]', () => {
	const head = ListNode.fromArray([1, 2])
	const n = 1
	const expected = ListNode.fromArray([1])
	asserts.assertEquals(removeNthFromEnd(head, n), expected)
})
