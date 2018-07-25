const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.get("/search", routes.search);
app.get("/healthcheck", routes.healthcheck);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
