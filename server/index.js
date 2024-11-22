const express = require("express");
const phones = require("./phones.json");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id) || {};

  res.send(phone);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
