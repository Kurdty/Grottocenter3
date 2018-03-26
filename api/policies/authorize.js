/**
 * apiKeyAuth
 *
 * @module      :: Policy
 * @description :: API key authentication
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
const _ = require('underscore.string');

module.exports = function(req, res, next) {
  const requestToken = req.headers['x-api-key'] || req.headers['x-access-token'] || req.headers.authorization;

  if (requestToken) {
    sails.log.debug('Received token ' + requestToken);

    if (_.include(requestToken, 'Bearer ')) {
      const jwtToken = _.replaceAll(requestToken, 'Bearer ', '', true);
      TokenAuthService.verify(jwtToken, function(err, token) {
        if (err) {
          sails.log.debug('err ' + err);
          return res.forbidden('Invalid Token');
        }
        req.token = token; // This is the decrypted token or the payload you provided
        next();
      });
    } else if (_.include(requestToken, 'Api-Key ')) {
      const apiKey = _.replaceAll(requestToken, 'Api-Key ', '', true);
      if (apiKey === 'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ=') {
        next();
      }
    } else if (requestToken === 'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ=') {
      next();
    } else {
      return res.forbidden('Invalid Token');
    }
  } else {
    return res.forbidden('You are not authorized to perform this action.');
  }
};
