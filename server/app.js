const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
dotenv.config({ path: ".env" });

require("./db/conn");

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use(require("./router/route"));
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Running  at ${PORT}`);
});




    