#!/usr/bin/env node

const
  Path = require("path"),
  Fs = require("fs"),
	path = process.env.PATH,
	_ = require("lodash"),
  parts = _.flatMap(path.split(Path.delimiter), part => part.split(" "))
  .filter(dir => Fs.existsSync(dir) && Fs.lstatSync(dir).isDirectory === true),
  
	cleanParts = _.uniq(parts)

// console.log(`clean=${cleanParts.length},orig=${parts.length}`)

// cleanParts.forEach((part, index) => console.log(`${index}\t${part}`))

console.log(cleanParts.join(Path.delimiter))

