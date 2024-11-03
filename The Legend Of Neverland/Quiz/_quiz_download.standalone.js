const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const through = require('through2');
const ansiColors = require('ansi-colors');
const terser = require('terser');

async function main() {
  const quizFile = path.join(__dirname, 'quiz.txt');
  const inputScript = path.join(__dirname, 'script.js');
  const outputScript = path.join(__dirname, 'script.min.js');

  try {
    // Fetch and process quiz file
    const response = await axios.get('http://backend.webmanajemen.com/tlon/quiz.txt', {
      responseType: 'stream',
      maxRedirects: 10
    });

    await new Promise((resolve, reject) => {
      response.data
        .pipe(
          through.obj(function (chunk, _, next) {
            const processedData = chunk
              .toString('utf-8')
              .split(/\r?\n/)
              .map(line => line.replace(/\s+/g, ' ').trim())
              .filter(line => line.length > 0)
              .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
              .map(line => {
                line = line.trim();
                if (!line.endsWith('(O)') && !line.endsWith('(X)')) {
                  console.log(ansiColors.red('invalid'), line);
                }
                return line;
              })
              .join('\n');
            next(null, Buffer.from(processedData));
          })
        )
        .pipe(fs.createWriteStream(quizFile))
        .on('finish', resolve)
        .on('error', reject);
    });

    // Minify script.js
    const scriptContent = await fs.readFile(inputScript, 'utf-8');
    const result = await terser.minify(scriptContent);

    if (result.code) {
      await fs.writeFile(outputScript, result.code);
    } else {
      console.error('Terser minification failed:', result);
    }

  } catch (error) {
    console.error('An error occurred:', error.message || error);
    if (error.response) {
      console.error('Response:', error.response.data, error.response.status, error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    }
  }
}

main();
