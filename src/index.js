require("dotenv").config()
const express = require("express");
const route = require("./Routes/routes.js");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;

app.use(express.json());
mongoose.set('strictQuery', false);

mongoose.connect(process.env.URL, { useNewUrlParser: true, })

  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});