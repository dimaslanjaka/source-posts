// single runner

const axios = require('axios');
const fs = require('fs');
const { join } = require('path');
const path = require('path');
const through = require('through2');

async function main() {
  const quizfile = path.join(__dirname, 'quiz.txt');
  await axios.default
    .get('http://backend.webmanajemen.com/tlon/quiz.php?show', {
      method: 'get',
      responseType: 'stream',
      maxRedirects: 10
    })
    .then(function (response) {
      /**
       * @type {import('stream').Stream}
       */
      const streamData = response.data;
      streamData
        .pipe(
          through.obj(function (file, _, next) {
            const trim = file
              .toString('utf-8')
              .split(/\r?\n/gm)
              .filter((str) => str.trim().length > 0)
              .join('\n');
            file = Buffer.from(trim);
            return next(null, file);
          })
        )
        .pipe(fs.createWriteStream(quizfile));
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

  // minify script.js
  const terser = require('terser');

  let input = join(__dirname, 'script.js');
  let output = join(__dirname, 'script.min.js');
  await terser.minify(fs.readFileSync(input, 'utf-8')).then(function (result) {
    if (typeof result.code === 'string') {
      fs.writeFileSync(output, result.code);
    } else {
      console.log(result);
    }
  });

  /*
  // minify table.html
  const hmt = require('html-minifier-terser');

  input = join(__dirname, 'table.html');
  output = join(__dirname, 'table.min.html');
  await hmt
    .minify(fs.readFileSync(input, 'utf-8'), {
      removeAttributeQuotes: false,
      collapseWhitespace: true,
      preserveLineBreaks: true,
      removeComments: false
    })
    .then((result) => {
      if (typeof result === 'string')
        fs.writeFileSync(
          output,
          result.replace(
            '<!-- include Quiz/quiz.txt -->',
            fs.readFileSync(join(__dirname, 'quiz.txt'))
          )
        );
    });

  // minify style.css
  const CleanCSS = require('clean-css');

  input = join(__dirname, 'style.css');
  output = join(__dirname, 'style.min.css');
  const result = new CleanCSS({}).minify(
    fs.readFileSync(input, 'utf-8')
  ).styles;
  if (typeof result === 'string') fs.writeFileSync(output, result);*/
}

main();
