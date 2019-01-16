const fs = require('fs');
const fsPromises = require('fs').promises;

//pending -> waiting for the promise to finish
//fulfilled -> resolved
//rejected -> finished but errored out
// fsPromises.readFile('./promises.md', { encoding: 'utf8' }) 
//   .then(data => fsPromises.writeFile('./copy-txt', data))
//   .then(() => console.log('done copying')) 
//   .catch(err => console.error(err));


// fsPromises.writeFile('./write.txt', 'Something has been written') 
//   .then(data => fsPromises.writeFile('./copy-txt', data))
//   .then(() => console.log('done copying')) 
//   .catch(err => console.error(err));

module.exports = (src, dst) => {
  return fsPromises.readFile(src) 
    .then(data => fsPromises.writeFile(dst, data))
    /* eslint-disable-next-line*/
    .catch(err => console.error(err));
};

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromise('./http.md')
/* eslint-disable-next-line*/
  .then(data => console.log(data));
