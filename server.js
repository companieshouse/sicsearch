const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// inject variables into all templates
Object.assign(app.locals, {
  stylesheetUrl: '//localhost:9000/static/sic.styles.css',
  jsUrl: '//localhost:9000/static/sic.bundle.js'
});

app.set('view engine', 'pug');
app.set('views', './src/views');

app.get("/", routes.home);
app.get("/search", routes.search);
app.get("/healthcheck", routes.healthcheck);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
