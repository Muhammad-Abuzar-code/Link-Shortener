const express = require("express");
const app = express();
const urlRoutes = require("./src/routes/url");

app.use(express.json());

app.use("/url", urlRoutes);

const connectDB = require("./src/db/db");

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});