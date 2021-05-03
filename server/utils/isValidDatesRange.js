const moment = require('moment');
const Action = require('../models/action.model');

const isValidDatesRange = async (startDate, endDate, hostEmail) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let result = true;

    const hostRes = await Action.find({ hostEmail }, { fromDate: 1, toDate: 1 });

    if (!hostRes || hostRes.length === 0) {
        return result; 
    }
    else {
        hostRes.forEach((host) => {
            let startTest = moment(start).isBetween(host.fromDate, host.toDate);
            let endTest = moment(end).isBetween(host.fromDate, host.toDate);

            if (startTest || endTest) {
                result = false;
            }
        })
    }

    return result;
}


module.exports = isValidDatesRange;