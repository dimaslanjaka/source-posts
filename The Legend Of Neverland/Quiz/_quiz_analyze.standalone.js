// single runner

const axios = require('axios');
const fs = require('fs');
const { join } = require('path');
const path = require('path');
const through = require('through2');
const ansiColors = require('ansi-colors');

async function main() {
  const quizfile = path.join(__dirname, 'quiz.txt');
  const readfile = fs.readFileSync(quizfile).toString();
  const split = readfile
	.split(/\r?\n/gm)
	.map((str) => str.trim())
	.filter((str) => str.trim().length > 0)
	.sort(function (a, b) {
	  if (
		a.toLowerCase().replace(/[\W_]+/g, '') <
		b.toLowerCase().replace(/[\W_]+/g, '')
	  )
		return -1;
	  if (
		a.toLowerCase().replace(/[\W_]+/g, '') >
		b.toLowerCase().replace(/[\W_]+/g, '')
	  )
		return 1;
	  return 0;
	});
  fs.writeFileSync(quizfile, split.join('\n') + '\n');
  console.log(
	split.filter((str) => {
	  if (!/\((X|O)\)$/gm.test(str) && !/\((X|O)\)/gm.test(str)) {
		return true;
	  } else {
		return false;
	  }
	})
  );
}

main();
