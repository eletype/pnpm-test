const moment = require('moment');

module.exports.format = val => {
    return moment(val).format('MMM Do YY');
};
