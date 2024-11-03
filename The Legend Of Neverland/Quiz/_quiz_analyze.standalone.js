const fs = require('fs');
const path = require('path');
const ansiColors = require('ansi-colors');
const _ = require('lodash');

async function main() {
  const quizFile = path.join(__dirname, 'quiz.txt');

  // Read and process the quiz file
  const fileContent = fs.readFileSync(quizFile, 'utf-8');
  const processedLines = _.uniq(
    fileContent
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .sort((a, b) =>
        a
          .toLowerCase()
          .replace(/[\W_]+/g, '')
          .localeCompare(b.toLowerCase().replace(/[\W_]+/g, ''))
      )
  );

  // Write the sorted content back to the file
  fs.writeFileSync(quizFile, processedLines.join('\n') + '\n');

  // Log lines that do not end with '(X)' or '(O)'
  const invalidLines = processedLines.filter((line) => !/\((X|O)\)$/i.test(line));
  console.log(invalidLines.map((line) => ansiColors.red('invalid ') + line).join('\n'));
}

main();
