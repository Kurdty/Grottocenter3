/**
* TGroup.js
*
* @description :: tGroup model imported from localhost MySql server at 15/2/2017 13:11:19.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: 't_group',

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

    level : {
      type: 'integer',
      columnName: 'Level'
    },

    idLabel : {
      type: 'integer',
      unique: true,
      required: true,
      defaultsTo: '0',
      columnName: 'Id_label'
    },

    cavers: {
      collection: 'TCaver',
      via: 'idGroup',
      through: 'jcavergroup'
    },

    rights: {
      collection: 'TRight',
      via: 'idGroup',
      through: 'jgroupright'
    }
  }
};
