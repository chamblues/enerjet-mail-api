const express = require("express");
const router = express.Router();
const checkAuth = require("@app/middleware/check-auth");
// const graph = require("@app/graph");
const getAccessToken = require("@app/functions/getAccessToken");
const { Mailing } = require("@app/functions/send-emails/website");
const { isEmail } = require("@app/helpers");

router.use(checkAuth);

router.post("/website/custom", async (req, res) => {
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
		const customEmailResponse = await mailing.custom(responseToken);

		return res.status(200).json(customEmailResponse);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

// This endpoint can be removed after the new enerjet.com.pe site is deployed
router.post("/website/quiero-ser-distribuidor", async (req, res) => {
	try {
		const data = req.body;

		if (data.email === undefined || data.subject === undefined || data.template === undefined) {
			throw new Error("You made a bad request, parameters name, email, subject and template are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const reportResponse = await mailing.distribuidores(responseToken);

		return res.status(200).json(reportResponse);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

// This endpoint can be removed after the new enerjet.com.pe site is deployed
router.post("/website/libro-de-reclamaciones", async (req, res) => {
	try {
		const data = req.body;

		if (data.email === undefined || data.firstname === undefined || data.lastname === undefined || data.identification === undefined || data.phone === undefined || data.info_detail === undefined || data.info_request === undefined) {
			throw new Error("You made a bad request, parameters name, email, subject and template are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const reportResponse = await mailing.libroDeRelamaciones(responseToken);

		return res.status(200).json(reportResponse);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

module.exports = router;
