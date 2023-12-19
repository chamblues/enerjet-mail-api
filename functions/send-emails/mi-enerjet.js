const graph = require("../../graph");

const createEmail = (emailObj) => ({
	subject: emailObj.subject,
	toRecipients: [
		{
			emailAddress: {
				address: emailObj.to,
			},
		},
	],
	ccRecipients: [
		{
			emailAddress: {
				address: "garantiavirtual@corporacionenerjet.com.pe",
			},
		},
	],
	body: {
		content: emailObj.html,
		contentType: "html",
	},
	from: {
		emailAddress: {
			address: "atencionalcliente@corporacionenerjet.com.pe",
			// name: "Corporación ENERJET ⚡",
		},
	},
});

class Mailing {
	constructor({ name, email, subject, template } = data) {
		this.name = name;
		this.email = email;
		this.subject = subject;
		this.template = template;
	}

	async reporte(token) {
		try {
			const sendMail = {
				to: this.email, // list of receivers
				subject: this.subject, // Subject line
				html: this.template, // html body
			};

			const emailTemplate = createEmail(sendMail);

			const sendEmailResponse = await graph.sendEmail(token, emailTemplate);

			if (sendEmailResponse !== "sent") throw new Error("Something happened sending the email.");

			return {
				status: "successful",
				message: "The email was sent",
			};
		} catch (error) {
			return {
				status: "failed",
				message: "There was a problem sending the email",
			};
		}
	}
}

module.exports = {
	Mailing,
};
