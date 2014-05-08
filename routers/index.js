//Generate routing requests according to the VERB
var router = require('./controller');

//passport configuration
//TODO this should moved to the config dir
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: '831290403571532',
    clientSecret: '2c0e06153fff18bb910f00c12dcf7f5b',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {

  }
));

module.exports = function(app) {
    
    // handle API calls
    app.get('/api/:api', router.get);
    app.get('/api/:api/:id', router.getById);
    app.post('/api/:api', router.post);
    app.put('/api/:api/:id', router.put);
    app.delete('/api/:api/:id', router.delete);
    // load application
    app.get('/', function(req, res) {
		res.sendfile('./public/index.html'); // angular will handle this
	});
    
    app.get('/auth/facebook',
        passport.authenticate('facebook', { scope: 'read_stream' })
    );
    app.get('/auth/facebook/callback', 
        passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/public/login.html' }));
}