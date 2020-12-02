#!/usr/bin/env node

const
	Path = require("path"),
	path = process.env.PATH,
	_ = require("lodash"),
	parts = _.flatMap(path.split(Path.delimiter), part => part.split(" ")),
	cleanParts = _.uniq(parts).sort()

// console.log(`clean=${cleanParts.length},orig=${parts.length}`)

// cleanParts.forEach((part, index) => console.log(`${index}\t${part}`))

console.log(cleanParts.join(Path.delimiter))

