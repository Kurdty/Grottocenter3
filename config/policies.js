/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run ** before ** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file(e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http: //sailsjs.org/#/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http: //sailsjs.org/#/documentation/reference/sails.config/sails.config.policies.html
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions (`true` allows public     *
   * access)                                                                  *
   *                                                                          *
   ***************************************************************************/

  '*': [
    // https://github.com/balderdashy/sails/pull/1224
    // Initialize Passport
    require('passport').initialize(),
    // Use Passport's built-in sessions
    //require('passport').session()
  ],

  IndexController: {
    '*': false,
    'index': 'localize'
  },

  AuthController: {
    'login': true,
    'refreshToken': true,
    'logout': 'authorize'
  },

  CaverController: {
    '*': false,
    'getCaversNumber': 'authorize',
    'update': 'authorize',
    'destroy': 'authorize',
    'getRights': true
  },

  EntryController: {
    '*': 'authorize',
    'find': 'authorize',
    'findAll': true,
    'findRandom': true,
    'getPublicEntriesNumber' : 'authorize',
    'getEntriesNumber' : 'authorize'
  },

  'v1/EntryController': {
    '*': false,
    'find': 'authorize',
    'getPublicEntriesNumber' : 'authorize',
  },

  SearchController: {
    'findAll': 'authorize',
  },

  'v1/SearchController': {
    'findAll': 'authorize',
  },

  CaveController: {
    '*': true
  },

  AuthorController: {
    '*': false
  },

  PartnerController: {
    '*': true
  },

  I18nController: {
    '*': true
  },

  SwaggerController: {
    '*': true
  },

  TopographyController: {
    '*': false
  },

  CommentController: {
    '*': false
  },

  GrottoController: {
    '*': 'authorize'
  },

  AdminController: {
    '*': true
  },

  RssController: {
    '*': true
  },

  'v1/GeoLocController': {
    'countEntries': true,
    'findByBounds': true
  }

  /***************************************************************************
   *                                                                          *
   * Here's an example of mapping some policies to run before a controller    *
   * and its actions                                                          *
   *                                                                          *
   ***************************************************************************/
  // RabbitController: {

  // Apply the `false` policy as the default for all of RabbitController's actions
  // (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
  // '*': false,

  // For the action `nurture`, apply the 'isRabbitMother' policy
  // (this overrides `false` above)
  // nurture	: 'isRabbitMother',

  // Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
  // before letting any users feed our rabbits
  // feed : ['isNiceToAnimals', 'hasRabbitFood']
  // }
};
