const {search} = require("../search");

module.exports = (req, res) => {
  const searchTerm = req.query["search-term"];
  if (searchTerm) {
    search(searchTerm).then(results => {
      res.render("home", {
        results: results.hits.hits.map(({ _source }) => _source),
        searchTerm,
      });
    })
      .catch(() => {
        res.status(500).end();
      });
  } else {
    res.render("home");
  }
};
