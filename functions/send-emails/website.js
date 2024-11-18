const graph = require("../../graph");
const libroDeReclamaciones = require('@app/templates/libro-de-reclamaciones')

const createEmail = (emailObj) => ({
	subject: emailObj.subject,
	toRecipients: [
		{
			emailAddress: {
				address: emailObj.to,
			},
		},
	],
	ccRecipients: emailObj.ccEmails,
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
	constructor({ 
		name, 
		email, 
		subject, 
		template, 
		ccRecipients,

		firstname,
		lastname,
		identification,
		phone,
		address,
		departments,
		provinces,
		districts,
		incurrence_date,
		underAge,
		fullname_parent,
		identification_parent,
		email_parent,
		request_type,
		channel,
		info_detail,
		info_request,
		fileUrl,
		created_at
		} = data) {
		this.name = name;
		this.email = email;
		this.subject = subject;
		this.template = template;
		this.ccRecipients = ccRecipients;
		
		this.firstname = firstname;
		this.lastname = lastname;
		this.identification = identification;
		this.phone = phone;
		this.address = address;
		this.departments = departments;
		this.provinces = provinces;
		this.districts = districts;
		this.incurrence_date = incurrence_date;
		this.underAge = underAge;
		this.fullname_parent = fullname_parent;
		this.identification_parent = identification_parent;
		this.email_parent = email_parent;
		this.request_type = request_type;
		this.channel = channel;
		this.info_detail = info_detail;
		this.info_request = info_request;
		this.fileUrl = fileUrl;
		this.created_at = created_at;
	}

	
	async custom(token) {
		try {
			const hasCcEmails = this.ccRecipients?.length > 0;
			const ccEmails = hasCcEmails
				? this.ccRecipients.split(",").map((email) => ({
						emailAddress: {
							address: email.trim(),
						},
				})) : [];
				

			const sendMail = {
				to: this.email, // list of receivers
				subject: this.subject, // Subject line
				html: this.template, // html body
				ccEmails
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

	async distribuidores(token) {
		try {
			const hasCcEmails = this.ccRecipients?.length > 0;
			const ccEmails = hasCcEmails
				? this.ccRecipients.split(",").map((email) => ({
						emailAddress: {
							address: email.trim(),
						},
				})) : [];
				

			const sendMail = {
				to: this.email, // list of receivers
				subject: this.subject, // Subject line
				html: this.template, // html body
				ccEmails
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

	async libroDeRelamaciones(token) {

		const copyToEmails = "cascomercial@corporacionenerjet.com.pe, televentas@corporacionenerjet.com.pe, televentas1@corporacionenerjet.com.pe"
		const ccEmails = copyToEmails.split(",").map((email) => ({
				emailAddress: {
					address: email.trim(),
				},
		}));

		try {
            const sendMail = {
                to: this.email, // list of receivers
                subject: "Registro recibido en nuestro Libro de Reclamaciones", // Subject line
                html: libroDeReclamaciones(this), // html body
				ccEmails
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')


            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }
	}
}

module.exports = {
	Mailing,
};
