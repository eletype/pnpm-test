const fmt = require('formatter');
const moment = require('moment');
const money = require('money-format');

module.exports.main = async () => {
    const num = Math.random() * 10000;
    console.log('Number:', fmt.format(num));
    console.log('Money1:', fmt.format(num, true));
    console.log('Money2:', money.format(num, '£'));
    const date = moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).toDate();
    console.log('Date:', fmt.format(date));
};
