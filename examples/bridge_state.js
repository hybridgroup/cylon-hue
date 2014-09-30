var HueApi = require("node-hue-api").HueApi;

if (process.argv[2] == null || process.argv[3] == null) {
	throw("USAGE: node bridge_state 192.168.1.1 username");
}

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var hostname = process.argv[2],
    username = process.argv[3],
    api;

api = new HueApi(hostname, username);

// --------------------------
// Using a promise
api.getFullState().then(displayResult).done();

// --------------------------
// Using a callback
api.getFullState(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
