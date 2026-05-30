const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const ansiColors = require('ansi-colors');
const terser = require('terser');
const _ = require('lodash');

async function main() {
  const quizFile = path.join(__dirname, 'quiz.txt');
  const inputScript = path.join(__dirname, 'script.js');
  const outputScript = path.join(__dirname, 'script.min.js');

  try {
    // Fetch full content as text (no stream — avoids mode mismatch / chunk issues)
    console.log('Downloading quiz data...');
    const response = await axios.get('http://backend.webmanajemen.com/tlon/quiz.txt', {
      responseType: 'text',
      maxRedirects: 10,
      timeout: 30000
    });

    const raw = response.data;
    console.log(`Downloaded ${raw.length} characters`);

    // Process in memory
    const lines = raw
      .split(/\r?\n/)
      .map((line) => line.replace(/\s+/g, ' ').trim())
      .filter((line) => line.length > 0 && (line.includes('(X)') || line.includes('(O)')))
      .sort((a, b) =>
        a
          .toLowerCase()
          .replace(/[\W_]+/g, '')
          .localeCompare(b.toLowerCase().replace(/[\W_]+/g, ''))
      );

    const uniqueLines = _.uniq(lines);
    const processedData = uniqueLines.join('\n') + '\n';

    console.log(`Found ${uniqueLines.length} valid quiz lines`);
    await fs.writeFile(quizFile, processedData, 'utf-8');
    console.log(`Written to ${quizFile}`);

    // Log lines that don't end with (X) or (O)
    const invalidLines = uniqueLines.filter((line) => !/\((X|O)\)$/i.test(line));
    if (invalidLines.length > 0) {
      console.log(invalidLines.map((line) => ansiColors.red('invalid ') + line).join('\n'));
    }

    // Minify script.js
    const scriptContent = await fs.readFile(inputScript, 'utf-8');
    const result = await terser.minify(scriptContent);

    if (result.code) {
      await fs.writeFile(outputScript, result.code);
      console.log(`Minified script written to ${outputScript}`);
    } else {
      console.error('Terser minification failed:', result);
    }
  } catch (error) {
    console.error('An error occurred:', error.message || error);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      // Log first 500 chars of response body to debug
      const body = typeof error.response.data === 'string'
        ? error.response.data.slice(0, 500)
        : String(error.response.data).slice(0, 500);
      console.error('Response body preview:', body);
    } else if (error.request) {
      console.error('No response received — server may be unreachable');
    }
  }
}

main();
