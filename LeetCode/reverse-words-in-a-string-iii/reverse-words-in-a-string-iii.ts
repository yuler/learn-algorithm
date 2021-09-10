function reverseWords(s: string): string {
	let result = ''
	const strings = s.split(' ')

	for (let index = 0; index < strings.length; index++) {
		const item = strings[index]
		result += ' ' + item.split('').reverse().join('')
	}

	return result.slice(1)
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test(
	'input: "Let\'s take LeetCode contest", expected: "s\'teL ekat edoCteeL tsetnoc"',
	() => {
		asserts.assertEquals(
			"s'teL ekat edoCteeL tsetnoc",
			reverseWords("Let's take LeetCode contest"),
		)
	},
)
