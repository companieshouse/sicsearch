const search = require("./search");

module.exports = {
  home: require("./home"),
  search: search.search,
  healthcheck: search.healthcheck
};
