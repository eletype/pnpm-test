const fmt = require('format-number');
const dateFmt = require('date-format');
const moneyFmt = require('money-format');

module.exports.format = (val, asMoney = false) => {
    if (typeof val === 'number') {
        if (asMoney) {
            return moneyFmt.format(val);
        }
        const myFormat = fmt({ padLeft: 3, round: 3 });
        return myFormat(val, { noSeparator: false });
    } else if (val instanceof Date) {
        return dateFmt.format(val);
    }
    return val;
};
