const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

// //middlewares

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://codemas:drhkzyGgwCeOWwsX@cluster0.18rh2ym.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(port, () => {
      console.log(`Server start as port no ${port}`);
    });
  })
  .catch((err) => console.log(err));

// drhkzyGgwCeOWwsX
