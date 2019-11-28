class HttpError extends Error {

    constructor(message, status = 500) {
        super(message);

        if (status && !status instanceof Number) {
            throw "second parameter 'status' needs to be a Number, but is " + typeof(status);
        }
        else if (status !== 500) { // otherwise this.status is the prototype attribute and saves memory
            this.status = status;
        }
    }
}

module.exports = HttpError;
