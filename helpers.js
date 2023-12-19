const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const isEmail = (value) => pattern.test(value);

// USe the following two functions to display in the console all routes
function print(path, layer) {
	if (layer.route) {
		layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
	} else if (layer.name === "router" && layer.handle.stack) {
		layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
	} else if (layer.method) {
		console.log("%s /%s", layer.method.toUpperCase(), path.concat(split(layer.regexp)).filter(Boolean).join("/"));
	}
}

function split(thing) {
	if (typeof thing === "string") {
		return thing.split("/");
	} else if (thing.fast_slash) {
		return "";
	} else {
		var match = thing
			.toString()
			.replace("\\/?", "")
			.replace("(?=\\/|$)", "$")
			.match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
		return match ? match[1].replace(/\\(.)/g, "$1").split("/") : "<complex:" + thing.toString() + ">";
	}
}

// app._router.stack.forEach(print.bind(null, []));

module.exports = {
	isEmail,
};
