const fmt = require('format-number');

module.exports.format = (val, prefix = '$') => {
    if (typeof val === 'number') {
        const myFormat = fmt({ prefix, round: 2 });
        return myFormat(val, { noSeparator: false });
    }
    return val;
};
