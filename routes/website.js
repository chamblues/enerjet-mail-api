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

		if (data.email === undefined || data.firstname === undefined || data.lastname === undefined || data.identification === undefined || data.phone === undefined || data.info_detail === undefined  || data.info_request === undefined) {
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
