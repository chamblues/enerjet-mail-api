const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const msal = require("@azure/msal-node");
const gardi = require("./routes/gardi");

// const session = require("express-session");  // DELETE THIS PACKAGE
// const flash = require("connect-flash");

const API_PORT = process.env.PORT || 5000;
const app = express();

// Session middleware
// app.use(
// 	session({
// 		secret: "email_api_delivery",
// 		resave: false,
// 		saveUninitialized: false,
// 		unset: "destroy",
// 	}),
// );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MSAL config
const msalConfig = {
	auth: {
		clientId: process.env.OAUTH_APP_ID,
		authority: process.env.OAUTH_AUTHORITY,
		clientSecret: process.env.OAUTH_APP_SECRET,
	},
	system: {
		loggerOptions: {
			loggerCallback(loglevel, message, containsPii) {
				console.log(message);
			},
			piiLoggingEnabled: false,
			logLevel: msal.LogLevel.Verbose,
		},
	},
};

// Create msal application object
app.locals.msalClient = new msal.ConfidentialClientApplication(msalConfig);



app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.setHeader("Content-Type", "application/json");

	return next();
});



// All OPTIONS requests return a simple status: 'OK'
app.options("*", (req, res) => {
	res.json({
		status: "OK",
	});
});

app.listen(API_PORT, () => {
	console.log("Listening on port:", API_PORT);
});

app.use("/mail/api", gardi);
// Middleware for header authentication


