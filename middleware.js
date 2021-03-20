const express = require("express");
const app = express();
const logger = require("./middlewareLogger");
const authorize = require("./middlewareAuthorize");

// req => middleware => res
// app.use("/api", logger);
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

// app.get("/api/items", [logger, authorize], (req, res) => {
//   console.log(req.user);
//   res.send("Items");
// });

app.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
