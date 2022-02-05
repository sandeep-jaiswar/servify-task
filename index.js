const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(req.headers.host);
  res.send(`client name : ${req.headers.host.split('.')[0]}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});