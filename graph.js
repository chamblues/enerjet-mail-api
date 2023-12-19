const graph = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

const sendEmail = async (responseToken, mail) => {
	try {
		const userEmail = mail.from.emailAddress.address;

		const client = getAuthenticatedClient(responseToken);

		await client.api(`/users/${userEmail}/sendMail`).post({ message: mail });
		
		console.log('Email was sent successfully', mail.toRecipients)

		return 'sent';

	} catch (error) {
		console.log('Could not send mail', error);
	}
};

function getAuthenticatedClient(token) {
	if (!token) {
		throw new Error(`Invalid MSAL state`);
	}

	// Initialize Graph client
	const client = graph.Client.init({
		authProvider: async (done) => {
			try {
				return done(null, token.accessToken);
			} catch (err) {
				console.log(JSON.stringify(err, Object.getOwnPropertyNames(err)));
				done(err, null);
			}
		},
	});

	return client;
}

module.exports = {
	sendEmail,
};
