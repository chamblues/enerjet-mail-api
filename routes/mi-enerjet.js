const express = require('express')
const router = express.Router()
const checkAuth = require('@app/middleware/check-auth');
// const graph = require("@app/graph");
const getAccessToken = require("@app/functions/getAccessToken");
const { Mailing } = require("@app/functions/send-emails/mi-enerjet");
const { isEmail } = require("@app/helpers");

router.use(checkAuth);

router.post("/mi-enerjet/reporte", async (req, res) => {
	try {

		const data = req.body;

		if (data.email === undefined || data.subject === undefined || data.template === undefined) {
			throw new Error("You made a bad request, parameters name, email, subject and template are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		// Validate attachments if provided
		if (data.attachments && Array.isArray(data.attachments) && data.attachments.length > 0) {
			const MAX_ATTACHMENTS_SIZE = 6 * 1024 * 1024; // 6MB in bytes
			let totalSize = 0;

			for (const att of data.attachments) {
				if (!att.name || !att.contentType || !att.contentBytes) {
					throw new Error("Each attachment must have 'name', 'contentType', and 'contentBytes' properties.");
				}

				// Calculate the decoded size from Base64 (Base64 uses ~4/3 ratio)
				const byteSize = Math.ceil((att.contentBytes.length * 3) / 4);
				totalSize += byteSize;
			}

			if (totalSize > MAX_ATTACHMENTS_SIZE) {
				throw new Error(`Total attachments size exceeds the 6MB limit. Current size: ${(totalSize / (1024 * 1024)).toFixed(2)}MB`);
			}
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