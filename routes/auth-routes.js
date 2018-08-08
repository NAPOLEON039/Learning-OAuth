const router = require('express').Router();

router.get('/success', (req, res) => {
    res.render('Success.html')
})
router.get('/signin', (req, res) => {
    //handling with passport
    res.send('Authenticating with Google...');
});

router.get('/logout', (req, res) => {
    //Handling with passport
    res.send('Logging out!');
})

module.exports = router;