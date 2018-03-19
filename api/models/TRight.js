/**
* TRight.js
*
* @description :: tRight model imported from localhost MySql server at 15/2/2017 13:11:28.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: 't_right',

  attributes: {
    id : {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      columnName: 'Id'
    },

    name : {
      type: 'string',
      size: 200,
      columnName: 'Name'
    },

    comments : {
      type: 'string',
      size: 1000,
      columnName: 'Comments'
    },

    groups: {
      collection: 'TGroup',
      via: 'idRight',
      through: 'jgroupright'
    }
  }
};
