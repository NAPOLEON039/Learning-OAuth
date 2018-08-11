const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(new GoogleStrategy({
    //options for the strategy
    callbackURL: '/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //accessToken is used to alter the user's profile if we need to
    //refreshToken is used to refresh the accessToken that expires after certain amount of time
    //profile contains user's profile information
    //done function needs to be called after we're done
    //passport callback function
    
}));