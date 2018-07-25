const { ping } = require("../search");

const search = (req, res) => {
  res.send("searching...");
};

const healthcheck = (req, res) => {
  ping()
    .then(() => res.send("ok"))
    .catch(() => res.status(500).send("down"));
};

module.exports = {
  search,
  healthcheck
};
