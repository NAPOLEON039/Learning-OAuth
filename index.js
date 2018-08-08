const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const authRoutes = require('./routes/auth-routes');
const p = require('./config/passport-setup');
const passport = require('passport');

let app = express();
app.engine('html', require('ejs').renderFile);
// app.use(passport.initialize())
// app.use(passport.session())

app.use(authRoutes);

app.get('/', (req, res) => {
    res.render('index.html');
});
app.get('/signin', passport.authenticate('twitter'));
app.get('/redirect', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/success');
});

app.use(serveStatic(__dirname + "/dist"));
// app.use(session({
//     secret: 'whatever',
//     resave: true,
//     saveUninitialized: true
// }));

let port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server started at port ${port}`);