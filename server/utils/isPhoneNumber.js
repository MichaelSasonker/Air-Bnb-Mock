const isValidPhoneNumber = (phoneStr) => {
    
    let phoneReg = /^\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/;

    if(phoneStr.match(phoneReg)) {
      return true;
    }

    return false;
}

module.exports = isValidPhoneNumber;