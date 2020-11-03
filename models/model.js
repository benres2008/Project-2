var orm = require("../config/orm.js");

var market = {
  all: function(cb) {
    orm.all("market", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("market", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("market", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("market", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = model;
