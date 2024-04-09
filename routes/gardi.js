const express = require('express')
const router = express.Router()
const checkAuth = require('@app/middleware/check-auth');
const graph = require("@app/graph");
const getAccessToken = require("@app/functions/getAccessToken");
const { Mailing } = require("@app/functions/send-emails/gardi");
const { isEmail } = require("@app/helpers");

const ctaMap = {
	PE: "https://www.enerjet.com.pe/garantias",
	NAC: "https://www.enerjet.com.pe/garantias",
	VE: "http://enerjet.com.ve/gardi/",
	CL: "https://enerjet.cl/gardi/",
	EC: "https://www.enerjet.com.ec/gardi/",
	DO: "https://www.enerjet.com.do/gardi/",
	SV: "https://www.enerjet.com.sv/gardi/",
	NI: "https://www.enerjet.com.ni/gardi/",
	PA: "https://www.enerjet.com.pa/gardi/",
	CR: "https://www.enerjet.co.cr/gardi/",
	BO: "https://enerjet.com.bo/garantia/",
	TT: "https://enerjet.com.tt/gardi/",
};
router.use(checkAuth);

// router.get("/gardi/debug", async (req, res) => {
// 	try {
// 		const responseToken = await getAccessToken(req);

// 		const sentResponse = await graph.sendEmail(responseToken);

// 		if (!sentResponse === "sent") throw new Error("Something went wrong sending the email");

// 		return res.send({
// 			"status": "successful",
// 			"message": "The email was sent"
// 		});
// 	} catch (error) {
// 		console.log(error.message)
// 	}
// });

router.post("/gardi/callService", async (req, res) => {
	try {
		const data = req.body;

		if (data.idSolicitud === undefined || data.Cliente === undefined || data.observacion === undefined || data.CodigoProducto === undefined) {
			throw new Error("You made a bad request, parameters idSolicitud, Cliente, observacion and CodigoProducto are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const callServices = await mailing.CallServices(responseToken);

		return res.status(200).json(callServices);
	} catch (error) {
		return res.status(400).json({
			status: "failed2",
			message: error.message,
		});
	}
});

router.post("/gardi/bienvenida",  async (req, res) => {
	try {
		const data = req.body;
		const { country } = data;

		console.log('==== data ===', data);
		console.log('==== country ======', country)

		if (data.name === undefined || data.email === undefined || data.qr_code === undefined || country === undefined) {
			throw new Error("You made a bad request, parameters name, email and qr_code are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const cta = `${ctaMap[country]}?findByCodId=${data.qr_code}`;

		data.ctaHref = cta || "https://www.enerjet.com.pe/garantias";
		data.banner = country === "EC" ? "https://enerjet.com.pe/mailings/2022/gardi_bienvenida/banner-ecuador.jpg" : "https://enerjet.com.pe/mailings/2022/gardi_bienvenida/banner.jpg";
		data.supportEmail = country === "EC" ? "ventas@bateparts.com" : "garantiavirtual@corporacionenerjet.com.pe";

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const bienvenida = country == "TT" ? await mailing.bienvenidaInternacional(responseToken) : await mailing.bienvenida(responseToken);

		

		return res.status(200).json(bienvenida);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

router.post("/gardi/mantenimiento", async (req, res) => {
	try {
		const data = req.body;
		const { country } = data;

		if (data.name === undefined || data.email === undefined || data.qr_code === undefined || data.service_name === undefined || data.service_address === undefined || data.maintenance_date === undefined || country === undefined) {
			throw new Error("You made a bad request, parameters name, email, qr_code, etc. are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const cta = `${ctaMap[country]}?findByCodId=${data.qr_code}`;

		data.ctaHref = cta || "https://www.enerjet.com.pe/garantias";

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const mantenimiento = await mailing.mantenimiento(responseToken);

		return res.status(200).json(mantenimiento);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

router.post("/gardi/recordatorio", async (req, res) => {
	try {
		const data = req.body;

		if (data.name === undefined || data.email === undefined || data.qr_code === undefined || data.service_name === undefined || data.service_address === undefined || data.guarantee === undefined) {
			throw new Error("You made a bad request, parameters name, email, qr_code,  etc. are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);
		const mailing = new Mailing(data);
		const recordatorio = await mailing.recordatorio(responseToken);

		return res.status(200).json(recordatorio);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

router.post("/gardi/perdida-garantia", async (req, res) => {
	try {
		const data = req.body;

		if (data.name === undefined || data.email === undefined || data.qr_code === undefined) {
			throw new Error("You made a bad request, parameters name, email, qr_code,  etc. are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const perdidaGarantia = await mailing.perdidaGarantia(responseToken);

		return res.status(200).json(perdidaGarantia);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

router.post("/gardi/renovacion", async (req, res) => {
	try {
		const data = req.body;

		if (data.name === undefined || data.email === undefined || data.qr_code === undefined || data.service_name === undefined || data.service_address === undefined || data.purchase_date === undefined) {
			throw new Error("You made a bad request, parameters name, email, qr_code,  etc. are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const renovacion = await mailing.renovacion(responseToken);

		return res.status(200).json(renovacion);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

router.post("/gardi/completa-activacion", async (req, res) => {
	try {
		const data = req.body;

		if (data.name === undefined || data.service_address === undefined || data.CodigoProducto === undefined) {
			throw new Error("You made a bad request, parameters name, email, CodigoProducto and service_address are required.");
		}

		if (!isEmail(data.email)) {
			throw new Error("The email is not valid");
		}

		const responseToken = await getAccessToken(req);

		const mailing = new Mailing(data);
		const completaActivacion = await mailing.completaActivacion(responseToken);

		return res.status(200).json(completaActivacion);
	} catch (error) {
		return res.status(400).json({
			status: "failed",
			message: error.message,
		});
	}
});

module.exports = router;
