// Check if the file exists using Node.js (Optional script to help debug)

const fs = require('fs');

fs.access('0-javascript_is_amazing.js', fs.constants.F_OK, (err) => {
  console.log(err ? 'File does NOT exist' : 'File exists');
});
