const moment = require('moment');
const Action = require('../models/action.model');

const isValidDatesRange = async (startDate, endDate, hostEmail) => {
    let sameStart, sameEnd, startTest, endTest;
    const start = new Date(startDate);
    const end = new Date(endDate);
    let result = true;

    const hostRes = await Action.find({ hostEmail }, { fromDate: 1, toDate: 1 });
    if (!hostRes || hostRes.length === 0) {
        return result; 
    }
    else {
        hostRes.forEach((host) => {
            sameStart = moment(start).isSame(host.fromDate);
            sameEnd = moment(end).isSame(host.toDate);
            startTest = moment(start).isBetween(host.fromDate, host.toDate);
            endTest = moment(end).isBetween(host.fromDate, host.toDate);
            
            if (startTest || endTest || sameStart || sameEnd) {
                result = false;
            }
        })
    }

    return result;
}

module.exports = isValidDatesRange;