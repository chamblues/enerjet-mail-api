const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
	console.log('Check Authentication', process.env.JWT_USERNAME )
	const header = req.headers.authorization;

	if (!header) {
		return res.status(403).send("Forbidden (Error 403): A token is required for authentication");
	}

	const token = header.split(" ")[1];

	jwt.verify(token, process.env.SECRET_TOKEN, function (err, decoded) {
		if (err) {
			return res.status(403).send("Forbidden (Error 403): Invalid token");
		}

		if (decoded.username === process.env.JWT_USERNAME && decoded.password === process.env.JWT_PASSWORD) {
			return next();
		}

		return res.status(403).send("Forbidden (Error 403): Bad token value");
	});
};


module.exports = checkAuth