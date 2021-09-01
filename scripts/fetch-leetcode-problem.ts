#!/usr/bin/env deno run --allow-read=LeetCode --allow-write=LeetCode --allow-net=leetcode-cn.com --unstable

/**
 * Deno 脚本
 *
 * 爬取 [LeetCode](https://leetcode-cn.com) 题目生成对应的目录
 *
 * @example
 * ```bash
 * fetch-leetcode-problem.ts binary-search
 * ```
 */

import {join} from 'https://deno.land/std@0.106.0/path/mod.ts'
import {ensureFile} from 'https://deno.land/std@0.106.0/fs/mod.ts'

const args = Deno.args

if (args.length !== 1) {
	throw new TypeError('Expected to accept a `problem` argument')
}

const problem = args[0]

// Create file if don't exist
const folder = join('LeetCode', problem)
const markdownPath = join(folder, `${problem}.md`)
await ensureFile(markdownPath)
await ensureFile(join(folder, `${problem}.js`))

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

// TODO: convert html to markdown
// refs: https://www.convertsimple.com/convert-html-to-markdown/

// Write markdown question file
await Deno.writeTextFile(markdownPath, html)
