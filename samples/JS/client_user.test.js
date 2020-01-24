const assert = require('chai').assert;
const ClientUser = require('../../src/models/client-user');

module.exports = function () {
  describe('ClientUser', function () {

    it('table exists', function (done) {
      const func = () => {
        ClientUser.fetchAll().catch(err => done(err))
      };
      assert.doesNotThrow(func, Error);
      done();
    });

  });
};
