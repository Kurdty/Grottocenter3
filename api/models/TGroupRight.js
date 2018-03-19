/**
* JGroupRight.js
*
* @description :: jGroupRight model imported from localhost MySql server at 15/2/2017 13:12:6.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: 'j_group_right',

  attributes: {
    idGroup: {
      type: 'integer',
      columnName: 'Id_group',
      model: 'TGroup'
    },
    idRight: {
      type: 'integer',
      columnName: 'Id_right',
      model: 'TRight'
    }
  }
};
