const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const hbs = require('hbs');
const authRoutes = require('./routes/auth-routes');
const setup = require('./config/passport-setup');
const passport = require('passport');

let app = express();
app.set('view engine', 'hbs');
// app.use(passport.initialize())
// app.use(passport.session())

app.use(authRoutes);

app.get('/', (req, res) => {
    res.render('index.hbs');
});
// app.get('/redirect', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//     res.redirect('/success');
// });

//app.use(serveStatic(__dirname + "/dist"));
// app.use(session({
//     secret: 'whatever',
//     resave: true,
//     saveUninitialized: true
// }));

app.listen(5000, () => {
    console.log('Server started at port 5000');
});