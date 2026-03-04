const express = require("express");
const noteRouter = require("./routes/notesRouter");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors()); // dev-safe
app.use(express.json());

app.use("/api", noteRouter);

const PORT = 3000;
const mongoUrl = process.env.MONGO_URI;

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(console.error);
