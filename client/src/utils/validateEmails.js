const RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails = "") => {
    emails = emails.split(",").map(email => email.trim()).filter(email => email);
    if (!emails.length)
        return "There must be atleast one email";
    else if (emails.some(email => !RE.test(email)))
        return "The emails must be valid and seperated by a comma";
    else
        return "";
};