'use strict';

// query to get a random entry of interest
const RIGHTS_OF_USER_QUERY = 'SELECT *'
                          + ' FROM t_group G'
                          + ' LEFT JOIN j_caver_group CG ON CG.Id_group = G.id'
                          + ' LEFT JOIN t_caver C ON C.Id = CG.Id_caver'
                          + ' LEFT JOIN j_group_right GR ON GR.Id_group = G.id'
                          + ' LEFT JOIN t_right R ON GR.Id_right = R.id'
                          + ' WHERE C.id=1'
                          + ' ORDER BY G.id;';

module.exports = {
  /**
   * @returns {Promise} which resolves to the succesfully findRandom
   */
  userRights: function(userId) {
    return new Promise((resolve, reject) => {
      CommonService.query(TGroup, RIGHTS_OF_USER_QUERY, [userId]).then(function(results) {
        resolve(results);
      });
      reject();
    });
  }

};
