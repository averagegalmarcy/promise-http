

const fsPromises = require('fs').promises;

const removeCapitals = str => {
  return str.replace(/[A-Z]/g, '');
};

const makeAllLetters = str => str.toUpperCase();


const reverse = str => str.split('').reverse().join('');

const transformer = src => {
  return fsPromises.readFile(src, { encoding: 'utf8' }) 
    .then(removeCapitals)
    .then(makeAllLetters)
    .then(reverse);
};

module.exports = {
  transformer, 
  removeCapitals
};
