/**
* JCaverGroup.js
*
* @description :: jCaverGroup model imported from localhost MySql server at 15/2/2017 13:11:8.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'j_caver_group',

  attributes: {
    idCaver: {
      type: 'integer',
      columnName: 'Id_caver',
      model: 'TCaver'
    },
    idGroup: {
      type: 'integer',
      columnName: 'Id_group',
      model: 'TGroup'
    }
  }
};
