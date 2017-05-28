var orm = require('../config/orm');

module.exports = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(record, cb) {
    orm.insertOne('burgers', record, function(res) {
      cb(res);
    });
  },
  updateOne: function(record, condition, cb) {
    orm.updateOne('burgers', record, condition, function(res) {
      cb(res);
    });
  }
};
