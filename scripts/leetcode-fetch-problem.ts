#!/usr/bin/env deno run --allow-read=LeetCode --allow-write=LeetCode --allow-net=leetcode-cn.com --unstable

/**
 *
 * 爬取 [LeetCode](https://leetcode-cn.com) 题目生成对应的目录
 *
 * @example
 * ```bash
 * fetch-leetcode-problem.ts binary-search
 * ```
 */

import {join} from 'https://deno.land/std@0.106.0/path/mod.ts'
import {ensureFile, exists} from 'https://deno.land/std@0.106.0/fs/mod.ts'
import TurndownService from 'https://cdn.skypack.dev/turndown@7.1.1'
import {DOMParser} from 'https://deno.land/x/deno_dom@v0.1.13-alpha/deno-dom-wasm.ts'

const args = Deno.args

if (args.length !== 1) {
	throw new TypeError('Expected to accept a `problem` argument')
}

const problem = args[0]

const folder = join('LeetCode', problem)
const markdownPath = join(folder, `${problem}.md`)
const typescriptPath = join(folder, `${problem}.ts`)

if (await exists(folder)) {
	console.log(`[Warning]: ${folder} is exist\nPlease remove it`)
	Deno.exit(1)
}

const typescriptTemplate = `
function main() {
	// TODO
}

// test cases
import {asserts} from '../../deps.ts'
Deno.test('summary for test case ', () => {
	asserts.assertEquals(1, 1)
})
`

// Create file if don't exist
await ensureFile(markdownPath)
await ensureFile(typescriptPath)

// The body data is copy from https://leetcode-cn.com
const body = {
	operationName: 'questionData',
	query: `query questionData($titleSlug: String!) {
		question(titleSlug: $titleSlug) {
			content,
		  	translatedContent,
		}
	  }
	`,
	variables: {titleSlug: problem},
}

// Fetch the problem
try {
	const response = await fetch('https://leetcode-cn.com/graphql/', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'x-definition-name': 'question',
			'x-operation-name': 'questionData',
			'x-timezone': 'Asia/Shanghai',
		},
		body: JSON.stringify(body),
	})
	const json = await response.json()

	const html = json.data.question.translatedContent

	// Convert html to markdown
	// refs: https://github.com/mixmark-io/turndown/issues/390
	const parser = new DOMParser()
	const service = new TurndownService({})
	const document = parser.parseFromString(html, 'text/html')
	const markdown = service.turndown(document)

	// Write files
	await Promise.all([
		Deno.writeTextFile(markdownPath, markdown),
		Deno.writeTextFile(typescriptPath, typescriptTemplate),
	])
} catch (error) {
	throw error
}
