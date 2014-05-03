//Generate routing requests according to the VERB
var router = require('./controller');

module.exports = function(app) {
    
    // handle API calls
    app.get('/api/:api', router.get);
    app.get('/api/:api/:id', router.getById);
    app.post('/api/:api', router.post);
    app.put('/api/:api/:id', router.put);
    app.delete('/api/:api/:id', router.delete);
    // load application
    app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // angular will handle this
	});
}