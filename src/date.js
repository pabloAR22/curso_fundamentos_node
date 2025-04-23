const dateFormatter = require('platzidate');

console.log('Timestamp: ', dateFormatter.getTimestamp());
console.log('Date: ', dateFormatter.getLongTime());
console.log('Date: ', dateFormatter.getLongTime('en-US')); 