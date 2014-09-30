var HueApi = require("node-hue-api").HueApi;

if (process.argv[2] === null || process.argv[3] === null) {
	throw("USAGE: node create_user 192.168.1.1 username")
}

var hostname = process.argv[2],
    newUserName = null // You can provide your own username value, but it is normally easier to leave it to the Bridge to create it
    userDescription = process.argv[3];

var displayUserResult = function(result) {
    console.log("Created user: " + JSON.stringify(result));
};

var displayError = function(err) {
    console.log(err);
};

var hue = new HueApi();

// --------------------------
// Using a callback (with default description and auto generated username)
hue.createUser(hostname, null, null, function(err, user) {
    if (err) throw err;
    displayUserResult(user);
});
