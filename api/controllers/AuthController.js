/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
'use strict';
module.exports = {
  /*login: function(req, res) {
      passport.authenticate('local', function(err, user, info) {
          if ((err) || (!user)) {
              sails.log.error(err);
              req.session.flash = {
                  err: err
              }
              return res.redirect("/ui/login");
          }
          req.logIn(user, function(err) {
              if (err) res.send(err);
      req.session.authenticated = true;
              return res.redirect("/");
          });
      })(req, res);
  },*/

  login: function(req, res) {
    const contact = req.param('contact');
    const password = req.param('password');

    if (!contact || !password) {
      return res.forbidden(res.i18n('---BAD_CREDENTIAL'));
    }

    TCaver.findOne({
      contact: contact
    }, function(err, account) {
      if (!account) {
        return res.forbidden('--Bad credentials.');
      }

      TCaver.comparePassword(password, account, function(err, valid) {
        if (err || !valid) {
          return res.forbidden('-Bad credentials.');
        }

        // Get user rights
        console.log("Groups ", account.groups);

        req.session.authenticated = true;
        res.json({
          user: account,
          token: TokenAuthService.issue({
            id: account.id,
            username: account.nickname,
            role: account.groups
          })
        });
      });
    });
  },

  logout: function(req, res) {
    return res.badRequest('AuthController.logout not yet implemented!');
    /*req.session.authenticated = false;
    return res.json(200, {"Logout succeeded"});*/
  }
};
