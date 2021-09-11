export default class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val ?? 0
		this.next = next ?? null
	}

	static fromArray = generateListNodeFromArray
}

function generateListNodeFromArray(array: number[]): ListNode | null {
	const head = new ListNode()
	let dummy = head
	for (let index = 0; index < array.length; index++) {
		const item = array[index]
		dummy.next = new ListNode(item)
		dummy = dummy.next
	}
	return head.next
}
