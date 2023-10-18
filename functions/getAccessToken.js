const getAccessToken = async (req) => {
	
	const clientCredentialRequest = {
		skipCache: true,
		scopes: ['https://graph.microsoft.com/.default'],
		// grant_type: "client_credentials",
		// client_id: process.env.OAUTH_APP_ID,
		// client_secret: process.env.OAUTH_APP_SECRET,
	}
	
	const clientCredentials = await req.app.locals.msalClient.acquireTokenByClientCredential(clientCredentialRequest)



	return clientCredentials;
};

module.exports = getAccessToken;
