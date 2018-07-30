const s = require("../search");

const search = (req, res) => {
  s.search(req.query.q)
    .then(results => {
      const data = results.hits.hits.map(({ _source }) => _source);
      res.json(data);
    })
    .catch(() => {
      res.status(500).send("Error");
    });
};

const healthcheck = (req, res) => {
  s.ping()
    .then(() => res.send("ok"))
    .catch(() => res.status(500).send("down"));
};

module.exports = {
  search,
  healthcheck
};
