const { error } = require("console");
const express = require("express");
const { application, json } = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8520;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Confirmation message on Server start
app.listen(PORT, () => {
  console.log(`Geometry Dash Bucket List running at http://localhost:${PORT}`);
});
