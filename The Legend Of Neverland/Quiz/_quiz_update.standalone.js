// single runner

const axios = require('axios');
const fs = require('fs');
const path = require('path');

axios
  .get({
    method: 'get',
    url: 'http://backend.webmanajemen.com/tlon/quiz.txt',
    responseType: 'stream'
  })
  .then(function (response) {
    response.data.pipe(fs.createWriteStream(path.join(__dirname, 'quiz.txt')));
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
