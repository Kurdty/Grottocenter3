/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
'use strict';

const passport = require('passport');
const _ = require('underscore.string');

module.exports = {
  login: function(req, res) {
    const contact = req.param('contact');
    const password = req.param('password');

    console.log("Log in with " + contact + " " + password)

    if (!contact || !password) {
      return res.forbidden(res.i18n('---BAD_CREDENTIAL'));
    }

    passport.authenticate('local', function(err, user, info) {
      console.log("authenticate returned : ");
      console.log(err);
      console.log(user);

      if (user) {
        // Get user rights
        console.log("Groups ", user.groups);

        //req.session.authenticated = true;
        res.json({
          user: user,
          token: TokenAuthService.issue({
            id: user.id,
            username: user.nickname,
            role: user.groups
          })
        });
      } else {
        res.status(401);
        res.send('Unauthorized');
      }

    })(req, res);

    // TCaver.findOne({
    //   contact: contact
    // }, function(err, account) {
    //   if (!account) {
    //     return res.forbidden('--Bad credentials.');
    //   }
    //
    //   TCaver.comparePassword(password, account, function(err, valid) {
    //     if (err || !valid) {
    //       return res.forbidden('-Bad credentials.');
    //     }
    //
    //     // Get user rights
    //     console.log("Groups ", account.groups);
    //
    //     req.session.authenticated = true;
    //     res.json({
    //       user: account,
    //       token: TokenAuthService.issue({
    //         id: account.id,
    //         username: account.nickname,
    //         role: account.groups
    //       })
    //     });
    //   });
    // });
  },

  refreshToken: function(req, res) {
    const jwtToken = _.replaceAll(req.headers.authorization, 'Bearer ', '', true);
    console.log("enter refreshToken " + jwtToken);
    TokenAuthService.verify(jwtToken, function(error , result) {
      console.log("refreshToken");
      console.log(result);

      if (result) {
        // TODO refresh token expiration ??? if not rename to verfyToken
        // TODO return user data

        TCaver.findById(result.id, function(err, user) {
          if (err) {
            res.status(401);
            res.send('Unauthorized');
          } else {
            res.status(200);
            res.json({
              user: user[0],
              token: jwtToken
            });
          }
        });
      } else {
        res.status(401);
        res.send('Unauthorized');
      }
    });
  },

  logout: function(req, res) {
    return res.badRequest('AuthController.logout not yet implemented!');
    /*req.session.authenticated = false;
    return res.json(200, {"Logout succeeded"});*/
  }
};
