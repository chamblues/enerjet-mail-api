const express = require('express')
const router = express.Router()
const checkAuth = require('@app/middleware/check-auth');
// const graph = require("@app/graph");
const getAccessToken = require("@app/functions/getAccessToken");
const { Mailing } = require("@app/functions/send-emails/mi-enerjet");
const { isEmail } = require("@app/helpers");

router.use(checkAuth);

router.post("/mi-enerjet/reporte",  async (req, res) => {
	try {
        
		const data = req.body;

		if (data.name === undefined || data.email === undefined || data.subject === undefined || data.template === undefined ) {
			throw new Error("You made a bad request, parameters name, email, subject and template are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

        const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const reportResponse = await mailing.reporte(responseToken);

		return res.status(200).json(reportResponse);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});


module.exports = router;