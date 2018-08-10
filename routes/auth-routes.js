const router = require('express').Router();
const passport = require('passport');

router.get('/success', (req, res) => {
    res.render('success.hbs')
})
router.get('/signin', passport.authenticate('google', {
    //what information to get from the user
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/redirect', (req, res) => {
    res.send('You reached the callback URI');
})

router.get('/logout', (req, res) => {
    //Handling with passport
    res.send('Logging out!');
})

module.exports = router;