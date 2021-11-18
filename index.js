const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const route = require("./route/routes");
const app = express();
require("dotenv").config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", route);

const port = process.env.PORT || 3001;
const URL =
  "mongodb+srv://Shashidhar_5:Shashi%40123@cluster0.kms6f.mongodb.net/CrudApp?retryWrites=true&w=majority";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
