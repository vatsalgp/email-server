const RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (recipients = "") => {
	recipients = recipients.split(",").map((recipient) => recipient.trim());
	recipients = recipients.filter((recipient) => recipient);
	if (!recipients.length) return "There must be atleast one email";
	else if (recipients.some((recipient) => !RE.test(recipient)))
		return "The emails must be valid and seperated by a comma";
	else return "";
};
