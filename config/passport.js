
module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  }

  /*
  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      scope: ['profile', 'email']
    }
  }
  */
};

// module.exports = {
//   express: {
//     customMiddleware: function(app) {
//       app.use(passport.initialize());
//       app.use(passport.session());
//     }
//   }
// };
