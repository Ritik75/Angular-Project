let Validator = {};

Validator.validateEmailId = function (emailId) {
    let pattern = new RegExp("/^[a-z]+@[a-z]+\.com$");
    if ( !(pattern.test(emailId))) {
        let err = new Error("Error in email Id");
        err.status = 406
        throw err;
    }
}


Validator.validatePassword = function (password) {
    let pattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{7,20}/")
    if ( !(pattern.test(password))) {
        let err = new Error("Error in password");
        err.status = 406;
        throw err;
    }
}

module.exports = Validator;