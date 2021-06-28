class EmailDomainError extends Error {
    constructor(...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EmailDomainError)
        }

        this.name = "EmailDomainError";
        this.date = new Date();
    }
}

export default EmailDomainError;