/*
Simple route controller
-------------------

Input : All VERB based routing requests from server.js
*/

//TODO validate api requests and only authorized users can access these apis
//Serve all get requests
exports.get = function(req, res) {
    var api = req.params.api;
    var module = require("./api/"+api);
    //res.send("Processing all " + api + "s.");
    res.send(module.get(res));
};

//Serve all get requests with id parameter
exports.getById = function(req, res) {
    var api = req.params.api;
    var id = req.params.id;
    res.send("Processing " + api + " for id: " + id);
};

//Serve all post requests
exports.post = function(req, res) {
    var api = req.params.api;
    res.send("Processing all " + api + "s.");
};

//Serve all update requests with id parameter
exports.put = function(req, res) {
    var api = req.params.api;
    var id = req.params.id;
    res.send("Updating " + api + " for id: " + id);

};

//Serve all delete requests with id parameter
exports.delete = function(req, res) {
    var api = req.params.api;
    var id = req.params.id;
    res.send("Deleting " + api + " for id: " + id);

};